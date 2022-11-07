from ast import Assign
from distutils.sysconfig import customize_compiler
import json
import re
from urllib import response
import requests
import urllib

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


def getAssignedLicense(inputs, accessToken):
    url = '{0}/users/{1}/licenseDetails'.format(inputs['msGraphUrl'],inputs['accountId'])

    headers = {
        'Authorization' : 'Bearer {}'.format(accessToken)
    }
    
    response = requests.get(url, headers=headers, verify=False)
    if response.status_code == 200:
        responseBody = json.loads(response.content)
        try:
            return responseBody['value'][0]
        except:
            return {}
    else:
        raise ValueError ("Failed to get assigned license details of {}".format(inputs['accountPrincipleName']))

def getUserPrincipalName(inputs, accessToken):
    url = '{0}/users/{1}'.format(inputs['msGraphUrl'],inputs['accountId'])

    headers = {
        'Authorization' : 'Bearer {}'.format(accessToken)
    }
    
    response = requests.get(url, headers=headers, verify=False)
    if response.status_code == 200:
        responseBody = json.loads(response.content)
        return responseBody['userPrincipalName']
    else:
        raise ValueError ("Failed to get Principal Name of {}".format(inputs['accountId']))

def handler(context, inputs):
    
    #client_secret = context.getSecret(inputs['azureClientSecret']) 
    client_secret = inputs['azureClientSecret']

    accessToken = getAccessToken(inputs, client_secret)
    assignedLicense = getAssignedLicense(inputs, accessToken)

    if len(assignedLicense) == 0:
        azureSku = ''
        providerId = ''
        providerSkuPartNumber = 'Unasssigned'
    else:
        azureSku = assignedLicense['skuId']
        providerId = assignedLicense['id']
        providerSkuPartNumber = assignedLicense['skuPartNumber']

    customResource = {
        'accountPrincipleName': getUserPrincipalName(inputs, accessToken),
        'accountId': inputs['accountId'],
        'azureSku': azureSku,
        'providerId': providerId,
        'providerSkuPartNumber': providerSkuPartNumber, 
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
#    'azureClientSecret': '***',
#    'accountId': '***',
#    'id': 'e94329ee-aadd-4260-9886-441829c96a2a'   
#}
#
#context = {}
#
#assignedLicense = handler(context, inputs)