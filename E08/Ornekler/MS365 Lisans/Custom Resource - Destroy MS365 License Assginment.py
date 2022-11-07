from ast import Assign
import json
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

def assignLicense (inputs, accessToken):
    url = '{0}/users/{1}/assignLicense'.format(inputs['msGraphUrl'],inputs['accountId'])

    headers = {
        'Authorization' : 'Bearer {}'.format(accessToken)
    }
    
    payload = {
        "addLicenses": [],
        "removeLicenses": [inputs['azureSku']]
    }

    response = requests.post(url, json=payload, headers=headers, verify=False)

    if response.status_code == 200:
        print ("{} is succesfully removed a license".format(inputs['accountPrincipleName']))
        return True
    else:
        raise ValueError ("Failed to remove a license from {}".format(inputs['accountPrincipleName']))

def handler(context, inputs):
    
    #client_secret = context.getSecret(inputs['azureClientSecret']) 
    client_secret = inputs['azureClientSecret']

    accessToken = getAccessToken(inputs, client_secret)
    assignLicense(inputs, accessToken)

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