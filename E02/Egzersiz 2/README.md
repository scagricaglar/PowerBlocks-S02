Bu egzersizde amaç, [ilk egzersiz](../Egzersiz%201)dekine göre daha zengin bir API ve geniş bir obje yapısı sunan vRealize Operations API'ı ile etkileşme imkanı sağlamaktır.

vRealize Operations VMware Çoklu Bulut Yönetimi portföyünde yer alan bir Operasyon Yönetimi çözümü. Çözüm ile ilgili daha fazla detay almak isterseniz [web sitesi](https://www.vmware.com/products/vrealize-operations.html)ndeki kaynakları inceleyebilirsiniz.

Bu örnekte, yalnızca ismini bildiğiniz bir sanal makinenin son bir ay içinde herhangi bir noktada '%100 erişilebilirlik' hedefimizi ihlal edip etmediğini programatik olarak kontrol edeceğiz. 

Egzersizi başarı ile tamamlayabilmek için birbiri ile bağlantılı 4 farklı REST sorgusu göndermek gerekecek. Bu egzersizin kapsamı dışında kalacak olsa da, gerçek bir kullanım senaryosunda bu sorguların sonuçlarının bir script ya da kod ile işlenmeside gerekecektir. Çözümde bu amaçla kullanılabilecek kod örnekleri de paylaşılacak, bu örnekler önümüzdeki seanslarda daha detaylı olarak incelenecektir.

****Bu egzersizi takip edebilmeniz için gerekecek 'API Key'i güvenlik nedeniyle genel kullanıma açık olan bu dokümanda paylaşamıyorum. Egzersizi uygulamalı olarak takip  etmek isteyenlerin bu parametreyi benden mail ile istemeleri gerekecek: ccaglar@vmware.com**

Bu aşamada egzersizi Postman ile takip etmeniz öngörülmüştür. Daha gelişmiş kullanıcılar çözümde yer alan Postman adımlarını takip ederek cURL ya da PowerShell komutlarını oluşturabilirler.

vRealize Operations API dokümantasyonuna [bu linkten](https://developer.vmware.com/apis/vrealize-operations/latest/) erişebilirsiniz. [vRealize Operations Cloud API Programming Guide](https://docs.vmware.com/en/vRealize-Operations/Cloud/com.vmware.vcom.api.doc/GUID-79DD20A4-2F38-4EAB-94BF-771DF2C596B1.html) ise API kullanımı ile ilgili ek detaylar ve örnekler içeriyor. Bu iki doküman ve aşağıda adımlar çözüme ulaşmamız için yeterli. Herhangi bir noktada takılacak olursanız [çözüme](./cozum.md) göz atabilirsiniz.

## 1. CSP API Key ile vROps Access Token almak
Bu egzersizde, vROps Cloud tarafından izlenen gerçek bir ortama bağlacağız. Bu herkesin erişebileceği ve SaaS olarak sunulan bir çözüm. Sizinle paylaştığımız API Key ise güvenlik nedeniyle kısıtılı yetkilere sahip. 

Tüm VMware SaaS hizmetlerine erişim [VMWare CSP](https://console.cloud.vmware.com) (Cloud Services Portal) üzerinden sağlanıyor. 

SaaS servislerin API'larına erişim içinse CSP üzerinden bir API Key oluşturulması gerekiyor. Bu API key kullanılarak her bir servis için kısa ömürlü bir Access Token talep etmek gerekiyor. Alınan Access Token servislerle Authentication için kullanılıyor. Dolayısı ile egzersizin ilk adımı bu Access Token'ı almak olacak. 

vROps için bu adım [API Programing Guide](https://docs.vmware.com/en/vRealize-Operations/Cloud/com.vmware.vcom.api.doc/GUID-57E59E35-6C08-4424-A77F-468FACD35C41.html)'ın linkteki sayfasında 2. adımda örneklendiriliyor.

REST sorgumuzu göndereceğimiz adres aşağıda yer alıyor. Bu aynı zamanda ilk **POST** sorgumuz olacak. Bu nedenle sorguda bir 'body' gönderminiz gerekecek, örnekte body'nin içeriği **'-d'** parametresinde yer alıyor.
```
https://console.cloud.vmware.com/csp/gateway/am/api/auth/api-tokens/authorize
```
Gelen cevaptaki 'access_token' değeri bize 30 dakika boyunca platforma erişim sağlayacak. **Bu süreyi aşmanız durumunda yenisini talep etmeniz gerekecek.**

## 2. VM ismi ile vROps envanter listesini sorgulamak
Bu egzersizde ilgilendiğimiz VM'in ismi **'ubuntu'**. Bu VM, vROps envanterinde bir ID ile temsil ediliyor olacak. Öncelikte vROps envanterindeki bu isme sahip VM'leri listelemeli ve VM'e ait ID'yi bulmalıyız.

Bir önceki adımda vROps'a erişim için kullanacağımız access_token'ı edindiğimiz için artık direk olarak platformla etkileşebiliriz.

Kullanacağımız API kaynağı '/resources' olacak. Bu kaynağın kullanım detayları [ilgili başlık](https://developer.vmware.com/apis/vrealize-operations/latest/suite-api/api/resources/get/)ta yer alıyor.

Kullanacağımız Endpoint URL ise aşağıdaki şekilde:
```
https://www.mgmt.cloud.vmware.com/vrops-cloud/suite-api
```
Authentication için dokümandanki [örneği](https://docs.vmware.com/en/vRealize-Operations/Cloud/com.vmware.vcom.api.doc/GUID-F06BC51F-DD99-43E9-8A11-537FE6A20FC0.html) inceleyebilirsiniz. Özetle, sorgu içinde aşağıdaki gibi bir header yer almalı:
```
Authorization: CSPToken {{vropsAccessToken}}
```
Bu sorguyu direk göndermeniz durumunda cevap oldukça büyük ve okuması zor bir obje olacak. Daha anlamlı bir cevap için bu resource için desteklenen Query parametlerinden 'name' ve 'resourceKind'ı kullanarak cevabı filtrelemeniz tavsiyemdir. 

### Ekstra - Doğru Resource ID'yi kod ile bulmak
Bir önceki adım, doğru filtrelerle bile, çok sayıda sanal makineden içeren bir cevap döndürecektir. Bunun sebebi içinde 'ubuntu' geçen isimlere sahip birden fazla VM olması, hatta ismi 'ubuntu' olan birden fazla VM olması olabilir. Bizim ise doğru VM'i tespit etmemiz gerekiyor.

Bir önceki adımda cevap olarak aldığımız objeyi bir JSON görüntüleyiciye alıp gözle inceleyebilir ve bir sonraki adımda kullanacağımız ID'yi elde edebiliriz.

Gerçek bir kullanım senaryosunda bu adımı gelen cevabı bir döngüye (loop) sokarak tamamlayabilirdik. İncelemek isteyenler [çözümde](./cozum.md) örnek bir kod parçacığı bulabilirler. 

**Egzersizin kullandığı ortam canlı bir ortam olduğu için, siz bu adımları uygularken ortamda 'ubuntu' isimli bir makine bulunmayabilir. Böyle bir durum olursa, kendinize başka bir VM seçip onun ID'si ile ilerleyebilirsiniz.

## 3. VM için mevcut olan parametre isimlerinin tespiti
Bir önceki adımda ilgilendiğimiz VM'e ait ID'yi bulduk ve ihtiyacımız olan parametrenin bu VM'in availability değeri olduğunu biliyoruz. Ancak bu parametrenin platfrom üzerinden ne şekilde tanımlandığını bilmiyoruz.

Bu adımda VM'in hangi parametrelerinin olduğunu ve bu parametrelerin platformda hangi key'ler ile tanımlandığı sorgulayacağız.

Eğer egzersizi Postman ile takip ediyorsanız, ilk yapacağınız bir önceki adımda oluşturduğunuz sorguyu 'Duplicate' seçeneği kopyalamak olmalı. Çünkü bu sorgu bir öncekine çok benziyor.

Aslında bu adım için de aynı resource'u kullanacağız. Kullanacağımız metod [bu başlıkta](https://developer.vmware.com/apis/vrealize-operations/latest/suite-api/api/resources/id/statkeys/get/) detaylandırılıyor. Authentication yöntemi de bir önceki adım ile aynı. URL'in son hali ise aşağıdakine benzer olmalı:
```
{{vropsEndpoint}}/api/resources/{{id}}/statkeys
```
Bu sorgu uzun bir liste döndürecek. Objede içinde 'availability_kpi' geçen key'i aramak bu adımı tamamlamak için yeterli olacak.

Ek bir not. Bu adımda bulduğumuz key statik bir değer olduğu için gerçek bir kullanım senaryosunda bu sorguyu tekrar tekrar göndermek çok da anlamlı olmayacaktır. Bu değer elimizde olduğu sürece, direk olarak 4. adımla devam edebiliriz.

## 4. VM'in son bir aylık erişilebilirlik değerinin okunması
Artık ihtiyacımız olan değerleri platforma sormak için gereken tüm parametrelere sahibiz. Platforma son bir ay içindeki erişilebilirlik oranlarını sorgulayacak bir sorgu göndermemiz gerekiyor.

Erişilebilirlik grafiği bu rehber hazırlanırken platform arayüzünde aşağıda şekilde görüntüleniyor. Platform her bir 5 dakikalık aralık için yüzde cinsinden bir eşilebilirlik değeri hesaplıyor ve bu değerleri uzun süre boyuca saklıyor.

<img width="1396" alt="image" src="https://user-images.githubusercontent.com/25429217/190486083-2c95069e-e13d-4ca9-bfce-b9e157b2fa11.png">

Egzersizi Postman ile takip ediyorsanız yine ilk adım olarak bir önceki sorguyu kopyalayabiliriz.

Kullanacağımız resource yine aynı. Kullanacağımız metod [bu başlıkta](https://developer.vmware.com/apis/vrealize-operations/latest/suite-api/api/resources/id/stats/get/) detaylandırılıyor. URL'in son hali aşağıdakine benzer olmalı:
```
{{vropsEndpoint}}/api/resources/{{id}}/stats
```
Egzersizi tamamlamanın 2 farklı yolu var. Tavsiyem ikinci yönteme odaklanmanız, veriyi işleme adımını kendi kodunuzda yapmak yerine platforma yaptırmanızdır. Çözüm ikinci yönteme değinecek.
- Sorgu ile platformdan son 1 aya ait tüm veri noktalarını (data point) çekip, herhangi bir veri noktasının 100'ün altında olup olmadığını kodla (ya da şu an için gözle) kontrol etmek.
- Sorguyu platformdan 'son 1 ayın en düşük değeri'ni isteyecek şekilde göndermek. Bu değerin 100 olmaması ihlali tespit etmemiz için yeterli olacaktır.

İkinci yöntemle ilerleyecek olursanız, bu sorgu için 4 farklı Query parametresi kullanacağız:
- Bir önceki adımda bulduğumuz 'statKey'
- 'intervalQuantifier'
- 'intervalType'
- 'rollUpType'

İlgilendiğimiz değer cevabın 'data' key'i altında olacak.

**Bu egzersizin çözümü [linktedir](./cozum.md).**
