import json
import requests
import uuid

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

def getVeeamVmObject(baseUrl, accessToken, vmName): #Veeam works with vSphere moid. Get VM object to pull moid from vCenter trough vCenter

    url = baseUrl + "/api/v1/inventory/vmware/hosts/vc.muaddib.lab" #vCenter is hardcoded into this. Should be improved for multi vCenter environments

    headers = {
        'Authorization': 'Bearer ' + accessToken,
        'x-api-version': '1.0-rev1'
    }

    #This filter does not return an exact match
    parameters = {
        'nameFilter': vmName,
        'typeFilter': 'VirtualMachine'
    }

    response = requests.get(url,params=parameters,headers=headers,verify=False)
    if response.status_code == 200:
        print ("Collected VM inventory")
    else:
        raise ValueError ("Could not get the VM inventory with error code" + str(response.status_code))

    responseBody = json.loads(response.content)
    if responseBody['pagination']['count'] == 0: #No results found
        raise ValueError ("No VM found with name " + vmName)
    else:
        inventory = responseBody['data']
        for inventoryItem in inventory: #loop results to find exact name match
            if inventoryItem['inventoryObject']['name'] == vmName:
                vmObject = inventoryItem['inventoryObject']
                print ("Successfully found VM " + vmName)
                break

    return vmObject

def createBackupJob(baseUrl, accessToken, vmObject):

    url = baseUrl + "/api/v1/jobs"
    jobName = 'vRA Genereated for ' + vmObject['name']

    headers = {
        'Authorization': 'Bearer ' + accessToken,
        'x-api-version': '1.0-rev1',
        'Content-Type': 'application/json'
    }

    #Payload scheme is pulled from Veeam documentation
    payload = {
        'isHighPriority': False,
        'virtualMachines': {
            'includes': [vmObject]
        },
        'storage': {
            'backupRepositoryId': '07df0395-a878-43bb-9d8b-016504704b18',
            'backupProxies': {
                'autoSelection': True
            },
            'retentionPolicy': {
                'type': 'Days',
                'quantity': 7
            },
            'gfsPolicy': {
                'isEnabled': False
            },
            'advancedSettings': {
                'backupModeType': 'Incremental',
                'synthenticFulls': {
                    'isEnabled': False
                },
                'activeFulls': {
                    'isEnabled': False
                },
                'backupHealth': {
                    'isEnabled': False
                },
                'fullBackupMaintenance': {
                    'RemoveData': {
                        'isEnabled': False
                    },
                    'defragmentAndCompact': {
                        'isEnabled': False
                    }
                },
                'storageData': {
                    'enableInlineDataDedup': True,
                    'excludeSwapFileBlocks': True,
                    'excludeDeletedFileBlocks': True,
                    'compressionLevel': 'Auto',
                    'storageOptimization': 'Auto',
                    'encryption': {
                        'isEnabled': False
                    }
                },
                'notifications': {
                    'sendSNMPNotifications': False,
                    'emailNotifications': {
                        'isEnabled': False
                    },
                    'vmAttribute': {
                        'isEnabled': False
                    }
                },
                'vSphere': {
                    'enableVMWareToolsQuiescence': True,
                    'changedBlockTracking': {
                        'isEnabled': True,
                        'enableCBTautomatically': True,
                        'resetCBTonActiveFull': True
                    }
                },
                'storageIntegration': {
                    'isEnabled': False,
                    'limitProcessedVm': True,
                    'limitProcessedVmCount': 0,
                    'failoverToStandardBackup': True
                }
            }
        },
        'guestProcessing': {
            'appAwareProcessing': {
                'isEnabled': False
            },
            'guestFSIndexing': {
                'isEnabled': False
            },
            'guestInteractionProxies': {
                'autoSelection': True
            },
        },
        'schedule': {
            'runAutomatically': False,
            'retry': {
                'isEnabled': False
            },
            'backupWindow': {
                'isEnabled': False,
            }
        },
        'type': 'Backup',
        'description': 'Created by vRealize Automation as part of a Cloud Template. Please do not modify directly',
        'isDisabled': False,
        'name': jobName
    }

    response = requests.post(url, headers=headers, json=payload, verify=False)
    if response.status_code == 201:
        print("Successfully created backup Job '" + jobName + "'")
    else:
        raise ValueError ("Could not create backup job with error code " + str(response.status_code)) 
    
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
    vmName = inputs['vmName']
    id = str(uuid.uuid4())
    
    accessToken = getAccessToken(baseUrl, vbrUser, vbrPassword)
    vmObject = getVeeamVmObject(baseUrl, accessToken, vmName)
    backupJob = createBackupJob(baseUrl, accessToken, vmObject)
    logout(baseUrl, accessToken)
    
    backupJob['id'] = id

    return backupJob

#Kodu Standalone calistirabilmek için asagidaki inputs objesini guncellemeniz ve comment'leri kaldırmaniz gerekmektedir
#inputs = {
#    'vmName': 'ABCDEFG01',
#    'VBR URL': 'https://vbr.muaddib.lab:9419',
#    'VBR User': 'muaddib\\administrator',
#    'VBR Password': 'VMware1!'
#    }
#
#context = {}
#
#handler(context,inputs)