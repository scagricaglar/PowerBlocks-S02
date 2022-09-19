## 1. 1979 yılının en popüler filminin ismini bulmak
### Cevap: Alien
Bu cevap platformun sorguya cevap olarak gönderdiği objenin ilk eleamanının 'title'ı. Objeyi incelemek isterseniz bir kopyasına [buradan](./popularMovies.json) ulaşabilirsiniz.

****Aşağıdaki çözümlerde kullanılan 'client_id' değeri sizin için önceden oluşturuldu ve aslında bana ait bir hesabı kullanıyorsunuz. Pek tabii ki platform üzerinde kendi hesabınızı oluşturup yeni bir API app tanımı yapabilirsiniz.**

### Postman
- Yeni bir Collection (Klasör) oluşturup Collection Variable olarak aşağıdaki değişkenleri ekleyin.
```
traktEndPoint: https://api-staging.trakt.tv
client_id: cf142046867c94be40c84aefd1b2361e4776e7183af406ce00da5f7d5b72438c
```

<img width="613" alt="image" src="https://user-images.githubusercontent.com/25429217/190199747-3c53e6fd-08c8-467a-b91f-34dd1f0ed261.png">


- Bir sonraki adıma geçmeden önce lütfen bu sekmeyi kaydetmeyi unutmayın.
- Yeni bir Request oluşturun. Sorgu tipi **GET** olacak. URL ise aşağıdaki şekilde:
```
{{traktEndPoint}}/movies/popular
```
- Params sekmesinde 'years' isimli bir KEY oluşturup ve VALUE olarak 1979 girin. Bu sorguya Query parametresini ekleyecek.

<img width="642" alt="image" src="https://user-images.githubusercontent.com/25429217/190200586-ca1a934f-3403-4507-bef3-100ece2af0dd.png">

- Headers sekmesine, dokümanın [Movies](https://trakt.docs.apiary.io/#reference/movies/popular/get-popular-movies) başlığındaki örneğe uygun olarak 3 adet header eklenmesi gerekiyor.
```
Content-Type: application/json
trakt-api-version: 2
trakt-api-key: {{client_id}}
```

<img width="647" alt="image" src="https://user-images.githubusercontent.com/25429217/190201215-c0f5e3a0-dec3-4b7d-a3a3-97120b6fe265.png">

- Yukarıdaki görselde bizim eklediğimiz 3 adet header'dan önce 6 adet daha header olduğunu göreceksiniz. Bunlar Postman tarafından otomatik olarak oluşturulan gizli (hidden) header'lar. Bunları düzenlemenize gerek yok ve kullandağınız REST istemcisi tarafından otomatil olarak oluşturulacaklar.

- Herşey doğruysa 'Send' düğmesini kullanarak sorguyu gönderebilirsiniz. Gelmesi gereken cevabın bir kopyasını [burada](./popularMovies.json) bulabilirsiniz.

### cURL
- Linux ya da MacOS bir makinenin terminalinden gönderebileceğiniz cURL komutu aşağıdaki şekilde. Tek seferde konsola yapıştırıp çalıştırabilirsiniz.
- Header'ların dokümanın [Movies](https://trakt.docs.apiary.io/#reference/movies/popular/get-popular-movies) başlığındaki örneğe uygun olarak kullanıldığına dikkat edin.

```
curl --request GET 'https://api-staging.trakt.tv/movies/popular?years=1979' \
--header 'Content-Type: application/json' \
--header 'trakt-api-version: 2' \
--header 'trakt-api-key: cf142046867c94be40c84aefd1b2361e4776e7183af406ce00da5f7d5b72438c'
```
- Komut çıktısın bir kopyasını [burada](./popularMovies.json) bulabilirsiniz. Gelen JSON objesini daha rahat okunabilir hale getirmek için bir JSON görüntüleyiciye yapıştırabilirsiniz.

### PowerShell
- PowerShell üzerinden bu sorguyu gönderebilmek için aşağıdaki komutları teker teker çağırabilirsiniz.
- İlk olarak 'headers' isimli bir obje yaratacağız.
```
$headers = @{}
```
- Ardından sırası ile şu üç komutu çalıştırarak 'headers' isimli objenin içini dokümanın [Movies](https://trakt.docs.apiary.io/#reference/movies/popular/get-popular-movies) başlığındaki örneğe uygun olarak dolduralım.
```
$headers.Add("Content-Type", "application/json")
```
```
$headers.Add("trakt-api-version", "2")
```
```
$headers.Add("trakt-api-key", "cf142046867c94be40c84aefd1b2361e4776e7183af406ce00da5f7d5b72438c")
```
- Bir sonraki adım olarak aşağıdaki komut ile REST sorgusunu gönderebiliriz. Herşey doğru çalıştığında bir komut herhangi bir çıktı vermeyecektir.
```
$response = Invoke-RestMethod 'https://api-staging.trakt.tv/movies/popular?years=1979' -Method 'GET' -Headers $headers
```
- Konsola aşağıdaki komutları yazarak sorgunun sonuçlarını görüntüleyebilirsiniz. İlki sonucu tablo olarak, ikincisi ise JSON olarak görüntüleyecektir.
```
$response
```
```
$response | ConvertTo-Json

```
