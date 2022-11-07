import json
import requests

def getAccessToken (baseUrl, vbrUser, vbrPassword):
    
    url = baseUrl + "/api/oauth2/token"

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-api-version': '1.0-rev1'
    }
    
    payload = {
        'use_short_term_refresh': False,
        'grant_type': 'password',
        'username': vbrUser,
        'password': vbrPassword
    }

    response = requests.post(url, data=payload , headers=headers, verify=False)
    if response.status_code == 200:
        print ("Successfully received access token")
    else:
        raise ValueError ("Failed Retrieving auth token with status code " + str(response.status_code))
    
    responseBody = json.loads(response.content)
    
    return responseBody["access_token"]

def deleteBackupJob(baseUrl, accessToken, veeamJobId, jobName):

    url = baseUrl + "/api/v1/jobs/" + veeamJobId    

    headers = {
        'Authorization': 'Bearer ' + accessToken,
        'x-api-version': '1.0-rev1'
    }

    response = requests.delete(url, headers=headers, verify=False)
    if response.status_code == 204:
        print("Successfully deleted backup Job '" + jobName + "'")
    else:
        raise ValueError ("Could not delete backup Job with error code " + str(response.status_code)) 

def logout(baseUrl, accessToken):
    
    url = baseUrl + "/api/oauth2/logout"

    headers = {
        'Authorization': 'Bearer ' + accessToken,
        'x-api-version': '1.0-rev1'
    }

    response = requests.post(url,headers=headers,verify=False)

def handler(context, inputs):
    
    baseUrl = inputs['VBR URL']
    vbrUser = inputs['VBR User']
    #vbrPassword = context.getSecret(inputs['VBR Password']) 
    vbrPassword = inputs['VBR Password']
    veeamJobId = inputs['veeamJobId']
    jobName = inputs['jobName']
    
    accessToken = getAccessToken(baseUrl, vbrUser, vbrPassword)
    deleteBackupJob(baseUrl, accessToken, veeamJobId, jobName)
    logout(baseUrl, accessToken)

#Kodu Standalone calistirabilmek için asagidaki inputs objesini guncellemeniz ve comment'leri kaldırmaniz gerekmektedir
#inputs = {
#    'vmName': 'ABCDEFG01',
#    'VBR URL': 'https://vbr.muaddib.lab:9419',
#    'VBR User': 'muaddib\\administrator',
#    'VBR Password': 'VMware1!',
#    'veeamJobId': '97fbf812-88e5-4c19-ac7a-bfe6b4108ff0',
#    'jobName': 'vRA Genereated for ABCDEFG01',
#    'isDisabled': False,
#    'id': '413470a3-02d5-4d95-95e0-d9bc3a57cf9f'
#}
#
#context = {}
#
#handler(context,inputs)