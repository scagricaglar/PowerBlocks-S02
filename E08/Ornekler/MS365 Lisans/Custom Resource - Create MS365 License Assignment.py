from ast import Assign
import json
from urllib import response
import requests
import urllib
import uuid

def getAccessToken (inputs, client_secret):
    
    url = '{0}/{1}/oauth2/v2.0/token'.format(inputs['msLoginUrl'],inputs['azureTenantId'])

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    payload = 'client_id={0}&scope={1}&client_secret={2}&grant_type=client_credentials'.format(inputs['azureClientId'],urllib.parse.quote(inputs['azureScope'],safe=''),client_secret)

    response = requests.post(url, data=payload , headers=headers, verify=False)
    
    if response.status_code == 200:
        print ("Successfully received access token")
    else:
        raise ValueError ("Failed Retrieving auth token with status code " + str(response.status_code))
    
    responseBody = json.loads(response.content)
    
    return responseBody["access_token"]

def assignLicense (inputs, accessToken):
    url = '{0}/users/{1}/assignLicense'.format(inputs['msGraphUrl'],inputs['accountPrincipleName'])

    headers = {
        'Authorization' : 'Bearer {}'.format(accessToken)
    }
    
    payload = {
        "addLicenses": [
            {
                "skuId": inputs['azureSku']
            }
        ],
        "removeLicenses": []
    }

    response = requests.post(url, json=payload, headers=headers, verify=False)

    if response.status_code == 200:
        print ("{} is succesfully assigned a license".format(inputs['accountPrincipleName']))
        return True
    else:
        raise ValueError ("Failed to assign a license to {}".format(inputs['accountPrincipleName']))

def getAssignedLicense(inputs, accessToken):
    url = '{0}/users/{1}/licenseDetails'.format(inputs['msGraphUrl'],inputs['accountPrincipleName'])

    headers = {
        'Authorization' : 'Bearer {}'.format(accessToken)
    }
    
    response = requests.get(url, headers=headers, verify=False)
    if response.status_code == 200:
        responseBody = json.loads(response.content)
        return responseBody['value'][0]
    else:
        raise ValueError ("Failed to get assigned license details of {}".format(inputs['accountPrincipleName']))

def getUserId(inputs, accessToken):
    url = '{0}/users/{1}'.format(inputs['msGraphUrl'],inputs['accountPrincipleName'])

    headers = {
        'Authorization' : 'Bearer {}'.format(accessToken)
    }
    
    response = requests.get(url, headers=headers, verify=False)
    if response.status_code == 200:
        responseBody = json.loads(response.content)
        return responseBody['id']
    else:
        raise ValueError ("Failed to get id of {}".format(inputs['accountPrincipleName']))


def handler(context, inputs):
    
    #client_secret = context.getSecret(inputs['azureClientSecret']) 
    client_secret = inputs['azureClientSecret']

    id = str(uuid.uuid4())
    accessToken = getAccessToken(inputs, client_secret)
    if assignLicense(inputs, accessToken):
        assignedLicense = getAssignedLicense(inputs, accessToken)

    customResource = {
        'id': id,
        'accountPrincipleName': inputs['accountPrincipleName'],
        'accountId': getUserId(inputs, accessToken),
        'azureSku': inputs['azureSku'],
        'providerId': assignedLicense['id'],
        'providerSkuPartNumber': assignedLicense['skuPartNumber']
    }
    
    return customResource

#Kodu Standalone calistirabilmek için asagidaki inputs objesini guncellemeniz ve comment'leri kaldırmaniz gerekmektedir
#inputs = {
#    'azureClientId': '***',
#    'azureScope': 'https://graph.microsoft.com/.default',
#    'azureDomain': '***.onmicrosoft.com',
#    'azureTenantId': '***',
#    'msGraphUrl': 'https://graph.microsoft.com/v1.0',
#    'msLoginUrl': 'https://login.microsoftonline.com',
#    'azureSku': '***',
#    'accountPrincipleName': '***@***.onmicrosoft.com',
#    'azureClientSecret': '***'    
#}
#
#context = {}
#
#assignedLicense = handler(context, inputs)