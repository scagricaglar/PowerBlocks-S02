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
    
def getBackupJob(baseUrl, accessToken, veeamJobId):
    url = baseUrl + "/api/v1/jobs/" + veeamJobId 
    
    headers = {
        'Authorization': 'Bearer ' + accessToken,
        'x-api-version': '1.0-rev1'
    }
    
    response = requests.get(url, headers=headers, verify=False)
    if response.status_code == 200:
        print("Successfully collected backup Job info")
    else:
        raise ValueError ("Could not collect backup job info with error code " + str(response.status_code))
        
    backupJob = json.loads(response.content)
    backupJobSimplified = {}
    backupJobSimplified['veeamJobId'] = backupJob['id']
    backupJobSimplified['jobName'] = backupJob['name']
    backupJobSimplified['isDisabled'] = backupJob['isDisabled']
    backupJobSimplified['includedVms'] = []
    for inventoryObject in backupJob['virtualMachines']['includes']:
        vmObjectSimplified = {
            'vmName': inventoryObject['inventoryObject']['name'],
            'vmMoid': inventoryObject['inventoryObject']['objectId']
        }
        backupJobSimplified['includedVms'].append(vmObjectSimplified)

    return backupJobSimplified

def updateBackupJob(baseUrl, accessToken, backupJob, vmObject):

    url = baseUrl + "/api/v1/jobs/" + backupJob['id']
    jobName = 'vRA Genereated for ' + vmObject['name']

    headers = {
        'Authorization': 'Bearer ' + accessToken,
        'x-api-version': '1.0-rev1',
        'Content-Type': 'application/json'
    }

    backupJob['name'] = jobName
    backupJob['description'] = backupJob['description'] + ". Updated by vRA for " + vmObject['name']
    backupJob['virtualMachines']['includes'] = [{'inventoryObject': vmObject}]

    response = requests.put(url, headers=headers, json=backupJob, verify=False)
    if response.status_code == 200:
        print("Successfully updated backup Job. New name is '" + jobName + "'")
    else:
        print(json.loads(response.content))
        raise ValueError ("Could not update backup job with error code " + str(response.status_code)) 
    
    backupJob = json.loads(response.content)
    backupJobSimplified = {}
    backupJobSimplified['veeamJobId'] = backupJob['id']
    backupJobSimplified['jobName'] = backupJob['name']
    backupJobSimplified['isDisabled'] = backupJob['isDisabled']
    backupJobSimplified['includedVms'] = []
    for inventoryObject in backupJob['virtualMachines']['includes']:
        vmObjectSimplified = {
            'vmName': inventoryObject['inventoryObject']['name'],
            'vmMoid': inventoryObject['inventoryObject']['objectId']
        }
        backupJobSimplified['includedVms'].append(vmObjectSimplified)

    return backupJobSimplified

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
    
    accessToken = getAccessToken(baseUrl, vbrUser, vbrPassword)
    backupJob = getBackupJob(baseUrl, accessToken,veeamJobId)
    logout(baseUrl, accessToken)
    
    backupJob['id'] = inputs['id']

    return backupJob

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