##Bu kod parçacığı vRA'e bir sorgusu atarak elimizdeki refreshToken ile bir accessToken alır.

import requests
import json

def get_vra_token (refreshToken):
    url = 'https://vra.muaddib.lab/iaas/api/login'
    headers = {'Content-Type': 'application/json'}
    body = {'refreshToken': refreshToken}
    response = requests.post(url, headers=headers, data=json.dumps(body), verify=False)
    if response.status_code == 200:
        responseObject = json.loads(response.content)
        accessToken = responseObject["token"]
        return accessToken
    else:
        print("vRA access token alınamadı. Response Code: " + str(response.status_code))
        return None

refreshToken = '5bljelBXx9R57Z7lYzuLKWuqfewM3JU0'
access_token = get_vra_token(refreshToken)

print(access_token)