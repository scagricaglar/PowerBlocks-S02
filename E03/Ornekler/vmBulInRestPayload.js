//Bu kod parçacığı vROps'tan REST API ile alınmış bir VM envanterini okur ve 'ubuntu' isimli VM'in ID'sini bulur.


//var data = JSON.parse(responseBody) //Postman için

var data = {
    "pageInfo": {
        "totalCount": 11,
        "page": 0,
        "pageSize": 1000
    },
    "links": [
        {
            "href": "/suite-api/api/resources?resourceKind=virtualMachine&amp;name=ubuntu&amp;page=0&amp;pageSize=1000",
            "rel": "SELF",
            "name": "current"
        },
        {
            "href": "/suite-api/api/resources?resourceKind=virtualMachine&amp;name=ubuntu&amp;page=0&amp;pageSize=1000",
            "rel": "RELATED",
            "name": "first"
        },
        {
            "href": "/suite-api/api/resources?resourceKind=virtualMachine&amp;name=ubuntu&amp;page=0&amp;pageSize=1000",
            "rel": "RELATED",
            "name": "last"
        }
    ],
    "resourceList": [
        {
            "creationTime": 1656634162198,
            "resourceKey": {
                "name": "SC-DC1-UBUNTU01",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "502cf133-97eb-ddda-004d-99e5f69dbf81"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "SC-DC1-UBUNTU01"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-8874"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "c1818e61-8d43-4c88-b9a1-cff87ee717b6"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "9f5de6e8-3de9-488e-b4fe-c7bd9d57c9f1",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "3b8be68b-ac51-439c-8458-e58fcbd01289",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 45.028212720775414
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 15.209136803944912
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "YELLOW",
                    "score": 25.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/07e16f18-d1b6-4899-9eef-4f2d8d98d876",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/07e16f18-d1b6-4899-9eef-4f2d8d98d876/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/07e16f18-d1b6-4899-9eef-4f2d8d98d876/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=07e16f18-d1b6-4899-9eef-4f2d8d98d876",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=07e16f18-d1b6-4899-9eef-4f2d8d98d876",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/07e16f18-d1b6-4899-9eef-4f2d8d98d876/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/07e16f18-d1b6-4899-9eef-4f2d8d98d876/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/07e16f18-d1b6-4899-9eef-4f2d8d98d876/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "07e16f18-d1b6-4899-9eef-4f2d8d98d876"
        },
        {
            "creationTime": 1654002241428,
            "resourceKey": {
                "name": "ubuntu02",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "503ffb11-e979-b1c4-fa1b-9a3f71a1b7fc"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "ubuntu02"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-109"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "8b4f56e7-0236-4172-a391-d1f834390b2a"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "46fade5f-da7f-4ea5-a5cc-8de0c212c058",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 52.16540884515114
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 20.93050479888916
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/286ffa04-5b0c-4538-8e7f-b9eb97a35406",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/286ffa04-5b0c-4538-8e7f-b9eb97a35406/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/286ffa04-5b0c-4538-8e7f-b9eb97a35406/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=286ffa04-5b0c-4538-8e7f-b9eb97a35406",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=286ffa04-5b0c-4538-8e7f-b9eb97a35406",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/286ffa04-5b0c-4538-8e7f-b9eb97a35406/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/286ffa04-5b0c-4538-8e7f-b9eb97a35406/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/286ffa04-5b0c-4538-8e7f-b9eb97a35406/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "286ffa04-5b0c-4538-8e7f-b9eb97a35406"
        },
        {
            "creationTime": 1656634162198,
            "resourceKey": {
                "name": "ubuntu-18",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "502cbe0d-d865-5904-014f-2842978e1fa8"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "ubuntu-18"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-13057"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "c1818e61-8d43-4c88-b9a1-cff87ee717b6"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "9f5de6e8-3de9-488e-b4fe-c7bd9d57c9f1",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "3b8be68b-ac51-439c-8458-e58fcbd01289",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 67.31867335856442
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/3d71a594-0e60-4a1c-8c17-999e1472317d",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/3d71a594-0e60-4a1c-8c17-999e1472317d/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/3d71a594-0e60-4a1c-8c17-999e1472317d/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=3d71a594-0e60-4a1c-8c17-999e1472317d",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=3d71a594-0e60-4a1c-8c17-999e1472317d",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/3d71a594-0e60-4a1c-8c17-999e1472317d/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/3d71a594-0e60-4a1c-8c17-999e1472317d/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/3d71a594-0e60-4a1c-8c17-999e1472317d/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "3d71a594-0e60-4a1c-8c17-999e1472317d"
        },
        {
            "creationTime": 1651751644166,
            "resourceKey": {
                "name": "NSX-Ubuntu-423",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "500a677a-33c6-dacc-f121-6ac9e6a0f4ba"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "NSX-Ubuntu-423"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-1152"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "2b57217c-da33-4350-a726-480615f65b33"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "9991b4ed-2476-477e-8cfd-5f4c059f2098",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "8039956d-b05b-4937-8535-1d2ae5b1f259",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "42f45a34-bed8-470e-a29f-b42642ef71ae",
                    "resourceStatus": "NO_DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": "Unsupported VMTools version for making Guest operations"
                },
                {
                    "adapterInstanceId": "e4b0d7a3-7c6c-4846-8ff4-7936058cc636",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 79.18758343495563
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 20.12152671813965
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/48fe0cc3-49a9-4f81-a217-d7bb283194d3",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/48fe0cc3-49a9-4f81-a217-d7bb283194d3/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/48fe0cc3-49a9-4f81-a217-d7bb283194d3/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=48fe0cc3-49a9-4f81-a217-d7bb283194d3",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=48fe0cc3-49a9-4f81-a217-d7bb283194d3",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/48fe0cc3-49a9-4f81-a217-d7bb283194d3/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/48fe0cc3-49a9-4f81-a217-d7bb283194d3/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/48fe0cc3-49a9-4f81-a217-d7bb283194d3/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "48fe0cc3-49a9-4f81-a217-d7bb283194d3"
        },
        {
            "creationTime": 1656634162198,
            "resourceKey": {
                "name": "SC-DC1-UBUNTU02",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "502c8917-28b7-d0f7-8995-431d55ca03c6"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "SC-DC1-UBUNTU02"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-8937"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "c1818e61-8d43-4c88-b9a1-cff87ee717b6"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "9f5de6e8-3de9-488e-b4fe-c7bd9d57c9f1",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "3b8be68b-ac51-439c-8458-e58fcbd01289",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "YELLOW",
            "resourceHealthValue": 75.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "YELLOW",
                    "score": 75.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "RED",
                    "score": 0.0
                },
                {
                    "type": "WORKLOAD",
                    "color": "RED",
                    "score": 102.563263575236
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "RED",
                    "score": 0.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/4e0d55a6-6a5d-44ab-88f5-88f4ca90b419",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/4e0d55a6-6a5d-44ab-88f5-88f4ca90b419/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/4e0d55a6-6a5d-44ab-88f5-88f4ca90b419/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=4e0d55a6-6a5d-44ab-88f5-88f4ca90b419",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=4e0d55a6-6a5d-44ab-88f5-88f4ca90b419",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/4e0d55a6-6a5d-44ab-88f5-88f4ca90b419/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/4e0d55a6-6a5d-44ab-88f5-88f4ca90b419/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/4e0d55a6-6a5d-44ab-88f5-88f4ca90b419/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "4e0d55a6-6a5d-44ab-88f5-88f4ca90b419"
        },
        {
            "creationTime": 1651751644166,
            "resourceKey": {
                "name": "tk-Ubuntu18.04",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "500ada85-161b-ea21-f336-c7cbaff5d51b"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "tk-Ubuntu18.04"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-1016"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "2b57217c-da33-4350-a726-480615f65b33"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "8039956d-b05b-4937-8535-1d2ae5b1f259",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "e4b0d7a3-7c6c-4846-8ff4-7936058cc636",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/54eaec62-9c24-41fc-abd8-67b106021bd6",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/54eaec62-9c24-41fc-abd8-67b106021bd6/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54eaec62-9c24-41fc-abd8-67b106021bd6/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=54eaec62-9c24-41fc-abd8-67b106021bd6",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=54eaec62-9c24-41fc-abd8-67b106021bd6",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54eaec62-9c24-41fc-abd8-67b106021bd6/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54eaec62-9c24-41fc-abd8-67b106021bd6/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54eaec62-9c24-41fc-abd8-67b106021bd6/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "54eaec62-9c24-41fc-abd8-67b106021bd6"
        },
        {
            "creationTime": 1654002241428,
            "resourceKey": {
                "name": "ubuntu",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "503faaf5-d425-5b55-135d-b70ca7aade93"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "ubuntu"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-23"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "8b4f56e7-0236-4172-a391-d1f834390b2a"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "46fade5f-da7f-4ea5-a5cc-8de0c212c058",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 27.133853338797355
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 14.307641983032227
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/54fd03b1-f515-42a1-9b2f-743cc26b5231",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/54fd03b1-f515-42a1-9b2f-743cc26b5231/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54fd03b1-f515-42a1-9b2f-743cc26b5231/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=54fd03b1-f515-42a1-9b2f-743cc26b5231",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=54fd03b1-f515-42a1-9b2f-743cc26b5231",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54fd03b1-f515-42a1-9b2f-743cc26b5231/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54fd03b1-f515-42a1-9b2f-743cc26b5231/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/54fd03b1-f515-42a1-9b2f-743cc26b5231/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "54fd03b1-f515-42a1-9b2f-743cc26b5231"
        },
        {
            "creationTime": 1651751644166,
            "resourceKey": {
                "name": "NSX-Ubuntu-422",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "500ab8b1-d8d1-524d-3016-ecfb2c4e24e6"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "NSX-Ubuntu-422"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-1153"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "2b57217c-da33-4350-a726-480615f65b33"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "9991b4ed-2476-477e-8cfd-5f4c059f2098",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "8039956d-b05b-4937-8535-1d2ae5b1f259",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "42f45a34-bed8-470e-a29f-b42642ef71ae",
                    "resourceStatus": "NO_DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": "Unsupported VMTools version for making Guest operations"
                },
                {
                    "adapterInstanceId": "e4b0d7a3-7c6c-4846-8ff4-7936058cc636",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 79.49612331697061
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 19.975614547729492
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "YELLOW",
                    "score": 25.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/b16e5de7-b84d-4e8f-8464-b1f4f008de8e",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/b16e5de7-b84d-4e8f-8464-b1f4f008de8e/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/b16e5de7-b84d-4e8f-8464-b1f4f008de8e/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=b16e5de7-b84d-4e8f-8464-b1f4f008de8e",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=b16e5de7-b84d-4e8f-8464-b1f4f008de8e",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/b16e5de7-b84d-4e8f-8464-b1f4f008de8e/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/b16e5de7-b84d-4e8f-8464-b1f4f008de8e/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/b16e5de7-b84d-4e8f-8464-b1f4f008de8e/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "b16e5de7-b84d-4e8f-8464-b1f4f008de8e"
        },
        {
            "creationTime": 1656634162198,
            "resourceKey": {
                "name": "mramzan-ubuntu-docker",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "502c23d3-d0d2-7f62-d59a-8d590e886209"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "mramzan-ubuntu-docker"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-15555"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "c1818e61-8d43-4c88-b9a1-cff87ee717b6"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "9f5de6e8-3de9-488e-b4fe-c7bd9d57c9f1",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "3b8be68b-ac51-439c-8458-e58fcbd01289",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 53.11871801043594
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 15.986700057983395
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/c623b6f8-b998-4ba6-a394-b393491a6abf",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/c623b6f8-b998-4ba6-a394-b393491a6abf/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/c623b6f8-b998-4ba6-a394-b393491a6abf/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=c623b6f8-b998-4ba6-a394-b393491a6abf",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=c623b6f8-b998-4ba6-a394-b393491a6abf",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/c623b6f8-b998-4ba6-a394-b393491a6abf/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/c623b6f8-b998-4ba6-a394-b393491a6abf/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/c623b6f8-b998-4ba6-a394-b393491a6abf/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "c623b6f8-b998-4ba6-a394-b393491a6abf"
        },
        {
            "creationTime": 1657282924421,
            "resourceKey": {
                "name": "ubuntu-2004-kube-v1.22.9+vmware.1",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "502c42da-7d92-2e8e-3ef2-20e1984cbaa1"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "ubuntu-2004-kube-v1.22.9+vmware.1"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-26502"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "c1818e61-8d43-4c88-b9a1-cff87ee717b6"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "9f5de6e8-3de9-488e-b4fe-c7bd9d57c9f1",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "3b8be68b-ac51-439c-8458-e58fcbd01289",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/e8806682-99d2-4a39-aef3-7070774d18be",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/e8806682-99d2-4a39-aef3-7070774d18be/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/e8806682-99d2-4a39-aef3-7070774d18be/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=e8806682-99d2-4a39-aef3-7070774d18be",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=e8806682-99d2-4a39-aef3-7070774d18be",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/e8806682-99d2-4a39-aef3-7070774d18be/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/e8806682-99d2-4a39-aef3-7070774d18be/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/e8806682-99d2-4a39-aef3-7070774d18be/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "e8806682-99d2-4a39-aef3-7070774d18be"
        },
        {
            "creationTime": 1651751644166,
            "resourceKey": {
                "name": "Ubuntu1604-Temp",
                "adapterKindKey": "VMWARE",
                "resourceKindKey": "VirtualMachine",
                "resourceIdentifiers": [
                    {
                        "identifierType": {
                            "name": "isPingEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityInstanceUUID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "500ae3c5-2d52-ebaa-f151-50a55fabff57"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityName",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": "Ubuntu1604-Temp"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityObjectID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "vm-41"
                    },
                    {
                        "identifierType": {
                            "name": "VMEntityVCID",
                            "dataType": "STRING",
                            "isPartOfUniqueness": true
                        },
                        "value": "2b57217c-da33-4350-a726-480615f65b33"
                    },
                    {
                        "identifierType": {
                            "name": "VMServiceMonitoringEnabled",
                            "dataType": "STRING",
                            "isPartOfUniqueness": false
                        },
                        "value": ""
                    }
                ]
            },
            "resourceStatusStates": [
                {
                    "adapterInstanceId": "8039956d-b05b-4937-8535-1d2ae5b1f259",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                },
                {
                    "adapterInstanceId": "e4b0d7a3-7c6c-4846-8ff4-7936058cc636",
                    "resourceStatus": "DATA_RECEIVING",
                    "resourceState": "STARTED",
                    "statusMessage": ""
                }
            ],
            "resourceHealth": "GREEN",
            "resourceHealthValue": 100.0,
            "dtEnabled": true,
            "badges": [
                {
                    "type": "HEALTH",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "CAPACITY_REMAINING",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "WORKLOAD",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "TIME_REMAINING",
                    "color": "GREEN",
                    "score": 366.0
                },
                {
                    "type": "RISK",
                    "color": "GREEN",
                    "score": 0.0
                },
                {
                    "type": "EFFICIENCY",
                    "color": "GREEN",
                    "score": 100.0
                },
                {
                    "type": "COMPLIANCE",
                    "color": "GREY",
                    "score": -1.0
                }
            ],
            "relatedResources": [],
            "links": [
                {
                    "href": "/suite-api/api/resources/f6287a89-c27d-4742-ae60-b3cad0025283",
                    "rel": "SELF",
                    "name": "linkToSelf"
                },
                {
                    "href": "/suite-api/api/resources/f6287a89-c27d-4742-ae60-b3cad0025283/relationships",
                    "rel": "RELATED",
                    "name": "relationsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/f6287a89-c27d-4742-ae60-b3cad0025283/properties",
                    "rel": "RELATED",
                    "name": "propertiesOfResource"
                },
                {
                    "href": "/suite-api/api/alerts?resourceId=f6287a89-c27d-4742-ae60-b3cad0025283",
                    "rel": "RELATED",
                    "name": "alertsOfResource"
                },
                {
                    "href": "/suite-api/api/symptoms?resourceId=f6287a89-c27d-4742-ae60-b3cad0025283",
                    "rel": "RELATED",
                    "name": "symptomsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/f6287a89-c27d-4742-ae60-b3cad0025283/statkeys",
                    "rel": "RELATED",
                    "name": "statKeysOfResource"
                },
                {
                    "href": "/suite-api/api/resources/f6287a89-c27d-4742-ae60-b3cad0025283/stats/latest",
                    "rel": "RELATED",
                    "name": "latestStatsOfResource"
                },
                {
                    "href": "/suite-api/api/resources/f6287a89-c27d-4742-ae60-b3cad0025283/properties",
                    "rel": "RELATED",
                    "name": "latestPropertiesOfResource"
                },
                {
                    "href": "/suite-api/api/credentials/",
                    "rel": "RELATED",
                    "name": "credentialsOfResource"
                }
            ],
            "identifier": "f6287a89-c27d-4742-ae60-b3cad0025283"
        }
    ]
}

var resourceList = data.resourceList //Cevaptaki resourceList listesini (array) oku
var vmId = "" //Boş bir vmId değişkeni oluştur

for (var vm of resourceList){ //Array içindeki hep bir objeyi sırayla oku ve vm ismindeki bir değişkene yaz
    if (vm.resourceKey.name == 'ubuntu') { //vm'in ismi 'ubuntu' ise...
        vmId = vm.identifier //vm'in Id'sinin vmId değişkenine yaz
        break //ve artık listenin kalanına bakmana gerek yok
    }
}

if (vmId == "") { //Tüm listeyi bitirdiğin halde ismi 'ubuntu' olan bir VM bulamadıysan...
    console.error('Aranan VM envanterde bulunamdı!') //Hata mesajı görüntüle
}

//pm.collectionVariables.set('vmID', vmId) //vmId'yi Collection Variable olarak kaydet

console.log (vmId)//vmId'yi konsola yaz

return vmId