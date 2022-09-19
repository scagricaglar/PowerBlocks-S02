## 2. Bu filmin isminin İspanyolca'daki karşılığını bulmak
### Cevap: Extraterrestre ya da Alienígena
Bu cevapların obje içindeki yerleri aşağıdaki şekilde. Objeyi incelemek isterseniz bir kopyasına [buradan](./translation.json) ulaşabilirsiniz.
```
response.results[0].lexicalEntries[0].entries[0].senses[1].translations[0].text
response.results[0].lexicalEntries[0].entries[0].senses[1].translations[1].text
```
Gördüğünüz gibi bu platformun obje yapısı biraz daha karmaşık. Bu platformun obje şemasını çözmenin size teknik açıdan bir faydası olmayabilir. Ancak **çözebiliyor** olmanın faydası olacak. Dolayısı ile bu objeyi dikkatle inceleyip anlamaya çalışmak da bu egzersizin bir parçası. Bu süreç ilginizi çekiyorsa; aşağıda neden özellikle bu tercümelerin tercih edildiğine dair ek açıklamaları bulabilirsiniz. Aksi takdirde direk olarak [Postman](./cozum2.md#postman), [cURL](./cozum2.md#curl) veya [PowerShell](./cozum2.md#powershell) başlıklarına devam edebilirsiniz.

- Objenin aşağıdaki içeriğinde tercüme kategorisinin Noun (isim) olduğununu göreceksiniz. 'results[1]' için bu değer Adjective (sıfat). Dolayısıla 'results[0]' içeriğine odaklanacağız.
```
response.results[0].lexicalEntries[0].lexicalCategory.text
```
- Objenin aşağıdaki içeriğinde bu tercümenin 'in science fiction' (bilim kurguda) kullanım için uygun olduğu belirtiliyor. 'senses[0]' için bu değer 'foreigner' (yabancı). Dolayısı ile 'senses[1]' içindeki tercümeleri tercih edeceğiz. Burada yer alan 2 tercüme de bizim için uygundur.
```
response.results[0].lexicalEntries[0].entries[0].senses[1].notes[0].text
```

****Aşağıdaki çözümlerde kullanılan 'app_id' ve 'app_key' değerleri sizin için önceden oluşturuldu ve aslında bana ait bir hesabı kullanıyorsunuz. Bu paratmeler ile yapılabilecek toplam sorgusu sınırlı, dolayısı ile egzersiz sırasında sorgu sayınızı makul seviyede tutmanız ricamızdır. Pek tabii ki platform üzerinde kendi hesabınızı oluşturup yeni değerler alabilirsiniz.**

### Postman
- Yeni bir Collection (Klasör) oluşturup Collection Variable olarak aşağıdaki değişkenleri ekleyin.
```
app_id: 15e84321
app_key: fb8269fb3de8f799c12bc2bc9c91b5d1
oxfordEndpoint: https://od-api.oxforddictionaries.com/api/v2
source_lang: en-us
target_lang es
```

<img width="681" alt="image" src="https://user-images.githubusercontent.com/25429217/190371893-edf51b19-fa38-4c1e-b3fb-62253fb1bcc9.png">

- Bir sonraki adıma geçmeden önce lütfen bu sekmeyi kaydetmeyi unutmayın.
- Yeni bir Request oluşturun. Sorgu tipi **GET** olacak. URL ile aşağıdaki şekilde:
```
{{oxfordEndpoint}}/translations/{{source_lang}}/{{target_lang}}/
```
- Yukarıdaki değeri URL satırına yapıştırdıktan sonra sonuna -tırnak olmadan- ':kelime' ekleyin. Bunu yaptığınızda Params sekmesine yeni bir 'Path Variable' otomatik olarak eklenecek.
- Params sekmesinde 'Path Variables' altında oluşan 'kelime' isimli yeni key'e değer olarak tırnaklar olmadan 'alien' yazın. Burada value olarak yazdığımız değer Postman tarafından URL'de dinamik olarak olarak kullanılacak.

*Path değişkenlerinin ':' ile gösterilmesi Postman'e özel ancak pratik bir yöntem. Bu yöntemi kullanmak yerine 'Collection Variables' altında 'kelime' isimin bir key oluşturup, sonra bu sorgunun URL'inde {{kelime}} olarak kullanabilirdik; aynı source_lang için yaptımığız gibi. Tercih tamamen sizin.

<img width="748" alt="image" src="https://user-images.githubusercontent.com/25429217/190374053-a9d0a03b-48c6-4c5b-8b33-76c7768469d9.png">

- Headers sekmesine, Authentication için, aşağıdaki gibi 2 adet header eklenmesi gerekiyor. Yöntem [Making requests to the API](https://developer.oxforddictionaries.com/documentation/making-requests-to-the-api) başlığında detaylandırılıyor. 
```
app_id: {{app_id}}
app_key: {{app_key}}
```

<img width="753" alt="image" src="https://user-images.githubusercontent.com/25429217/190374847-f3511206-80e0-4d1b-884d-96d5f74cf948.png">

- Herşey doğruysa 'Send' düğmesini kullanarak sorguyu gönderebilirsiniz. Gelmesi gereken cevabın bir kopyasını [burada](./translation.json) bulabilirsiniz.

### cURL
- Linux ya da MacOS bir makinenin terminalinden gönderebileceğiniz cURL komutu aşağıdaki şekilde. Tek seferde konsola yapıştırıp çalıştırabilirsiniz.
- Header'ların dokümanın [Making requests to the API](https://developer.oxforddictionaries.com/documentation/making-requests-to-the-api) başlığındaki örneğe uygun olarak kullanıldığına dikkat edin.
```
curl --request GET 'https://od-api.oxforddictionaries.com/api/v2/translations/en-us/es/alien' \
--header 'app_id: 15e84321' \
--header 'app_key: fb8269fb3de8f799c12bc2bc9c91b5d1'
```
- Komut çıktısın bir kopyasını [burada](./translation.json) bulabilirsiniz. Gelen JSON objesini daha rahat okunabilir hale getirmek için bir JSON görüntüleyiciye yapıştırabilirsiniz.

### PowerShell
- PowerShell üzerinden bu sorguyu gönderebilmek için aşağıdaki komutları teker teker çağırabilirsiniz.
- İlk olarak 'headers' isimli bir obje yaratacağız
```
$headers = @{}
```
- Ardından sırası ile şu iki komutu çalıştırarak 'headers' isimli objenin içini dokümanın [Making requests to the API](https://developer.oxforddictionaries.com/documentation/making-requests-to-the-api) başlığındaki örneğe uygun olarak dolduralım.
```
$headers.Add("app_id", "15e84321")
```
```
$headers.Add("app_key", "fb8269fb3de8f799c12bc2bc9c91b5d1")
```
- Bir sonraki adım olarak aşağıdaki komut ile REST sorgusunu gönderebiliriz. Herşey doğru çalıştığında bir komut herhangi bir çıktı vermeyecektir.
```
$response = Invoke-RestMethod 'https://od-api.oxforddictionaries.com/api/v2/translations/en-us/es/alien' -Method 'GET' -Headers $headers
```
- Konsola aşağıdaki komutları yazarak sorgunun sonuçlarını görüntüleyebilirsiniz. İlki sonucu tablo olarak, ikincisi ise JSON olarak görüntüleyecektir.
```
$response
```
```
$response | ConvertTo-Json

```
