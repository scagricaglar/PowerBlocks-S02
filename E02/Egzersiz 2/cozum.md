## 1. CSP API Key ile vROps Access Token almak
- Yeni bir Collection (Klasör) oluşturup Collection Variable olarak aşağıdaki değişkenleri ekleyin.
```
vropsEndpoint: https://www.mgmt.cloud.vmware.com/vrops-cloud/suite-api
cspEndpoint: https://console.cloud.vmware.com/csp/gateway/am/api/auth/api-tokens
cspAPIkey
vropsAccessToken
```
<img width="899" alt="image" src="https://user-images.githubusercontent.com/25429217/190426581-2a8406a8-0e96-41bc-9a9d-a285f5c46eab.png">

- Benden aldığınız API Key'i 'cspAPIKey'e değer olarak yapıştırın.
- Bir sonraki adıma geçmeden önce lütfen bu sekmeyi kaydetmeyi unutmayın.
- Yeni bir Request oluşturun. Sorgu tipi **POST** olacak. URL ise aşağıdaki şekilde:
```
{{cspEndpoint}}/authorize
```
- Authorization sekmesinde 'No Auth' seçili olduğundan emin olun.
- Headers sekmesine aşağıdaki key ve value'ları ekleyin. Bu değerleri yazarken Postman otomatik olarak tamamlama önerecektir.
```
Accept: application/json
Content-Type: application/x-www-form-urlencoded
```
- Body sekmesine gidip 'x-www-form-urlencoded' seçeneğini kullanın. Sonra da aşağıdaki key ve value'yu ekleyin:
```
refresh_token: {{cspAPIkey}}
```

<img width="639" alt="image" src="https://user-images.githubusercontent.com/25429217/190429478-9222567f-ec90-4d98-a9db-8ed612ea772f.png">

- İşimizi kolaylaştırması adına, Tests sekmesine aşağıdaki kod bloğunu yapıştırın. Bu sekmede REST sorgusunun ardından çalışmasını istediğimiz herhangi bir kodu JavaScript dilinde oluşturabiliriz.
```
var data = JSON.parse(responseBody)
pm.collectionVariables.set("vropsAccessToken", data.access_token)
```

- Bu 2 satırlık kod sırasıyla şunları yapacak. Böylece sorguyu çağırdıktan sonra ilgili değeri elle yapıştırmamız gerekmeyecek.
  - REST sorgusunda gelen JSON objesini 'data' isimli bir değişkene (variable) yazacak,
  - 'data' isimli objedeki 'access_token' key'inin value'sunu 'vropsAccessToken' isimli Collection Variable'ına yazacak.

- Sonrasında 'Send' düğmesini kullanarak sorguyu gönderebiliriz. Herşey doğru ise bize **200** kodu ile birlikte vROps'la konuşmak için 30 dakika boyunca kullanabileceğimiz access token gelecek.
- Egzersizin geri kalanındaki sorgular bir noktada doğru çalışmamaya ve '401 Authorization Required' hataları vermeye başlayacak olursa, bu access token süreniz dolduğu için olabilir. Böyle bir durumda bu adımı tekrarlamanız yeterli.

## 2. VM ismi ile vROps envanter listesini sorgulamak
- Yeni bir Request oluşturun. Sorgu tipi **GET** olacak. URL ise aşağıdaki şekilde:
```
{{vropsEndpoint}}/api/resources
```
- Params sekmesine gidip aşağıdaki iki key:value çiftini Query Param olarak ekleyin. Postman bu değerleri otomatik olarak sorgu URL'ine ekleyecek.
```
resourceKind: virtualMachine
name: ubuntu
```
- Sorguyu bu parametreler olmadan gönderecek olursak, gelecek cevap tüm vROps envanterini içerektir. Bu parametreler ise cevabı 'yalnızca isminde ubuntu bulunan sanal makineler' şeklinde filtreleyerek talep edecektir.
- Authorization sekmesine gidip Type olarak API Key'i seçin.
  - Key 'Authorization'
  - Value 'CSPToken {{vropsAccessToken}}'
  - Add to 'Header' olmalı.

*Yukarıdaki tanımı 'Authorization' sekmesinde yapmak yerine direk olarak 'Headers' sekmesinde de yapabilirdik. Zaten tanımın ardından Headers sekmesindeki 'hidden' header'ları inceleyecek olursanız Postman'in otomatik olarak bu şekilde bir satır oluşturduğunu göreceksiniz.

<img width="821" alt="image" src="https://user-images.githubusercontent.com/25429217/190435072-a5ac937b-b66d-416f-84c5-e31cf57f61b6.png">

- Headers sekmesine aşağıdaki key ve value'ları ekleyin. Bu değerleri yazarken Postman otomatik olarak tamamlama önerecektir.
```
Accept: application/json
Content-Type: application/x-www-form-urlencoded
```
- Sonrasında 'Send' düğmesini kullanarak sorguyu gönderebiliriz. Herşey doğru ise bize **200** kodu ile birlikte vROps envanterindeki filtre ile uyumlu VM'ler gelecektir. 
- Bu rehber yazılırken platform 11 adet VM içeren bir liste döndürmüştür. Cevabı bir JSON görüntüleyiciye yapıştırıp ismi "ubuntu" olan VM'i bulabilirsiniz. 
- Bu rehber yazılırken ilgili VM 'resourceList' listesinin (array) 7. elemanı olarak tespit edilmiştir. Ortam canlı bir ortam olduğu için VM'in sıralaması değişmiş olabilir. Ancak VM duruyorsa ID'si sabit kalmıştır.
- **Siz egzersizi takip ederken VM silinmişse listeden başka bir VM seçip sonraki adımlara onunla devam edebilirsiniz.**
-  Aradığımız VM ID'si aşağıdaki şekilde:
```
54fd03b1-f515-42a1-9b2f-743cc26b5231
```

<img width="402" alt="image" src="https://user-images.githubusercontent.com/25429217/190438290-24db8342-7faa-4c0a-8243-9cc716288b71.png">

### Ekstra - Doğru Resource ID'yi kod ile bulmak
Çözümün bu adımı tamamen ekstra. 

Gerçek bir kullanım senaryosunda bir önceki adımda aldığımız objeyi gözle incelemek yerine kodla incelemiz gerekir. Aşağıda Postman'in Test sekmesine ekleyebileceğiniz ve tam olarak bu işi yapacak bir JavaScript kodu bulabilirsiniz. 

Bu kodu bu şu an için okuyamıyorsanız kaygılanmayın, önümüzdeki haftalarda böyle nispeten basit kodları okuyabilecek hale geleceğiz hep birlikte. Yine de, inceleyecek olursanız kod içindeki yorumlar ('//' ile başlayan cümleler) size neler olup bittiği konusunda bir fikir verecektir. Bu kodu Postman test sekmesine yapıştırdığınızda renklenecek ve okuması biraz daha kolaylaşacaktır.

Kodu yapıştırdıktan sonra çalışması için sorguyu tekrar göndermeniz gerekecektir.

```
var data = JSON.parse(responseBody)
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

pm.collectionVariables.set('vmID', vmId) //vmId'yi Collection Variable olarak kaydet

console.log (vmId)//vmId'yi konsola yaz
```

Ek bir not. Aramızdaki daha ileri seviye kullanıcıların fark etmiş olabileceği üzere; yukarıdaki kod envanterde birden fazla aynı isimli VM olması durumunda yalnızca ilkini yakalayacak, diğerlerini görmezden gelecektir. İsmin benzersiz (unique) olacağını varsaymanın tartışmasız olarak yanlış bir yaklaşım olduğunu unutmayalım ama basitlik adına bu örnekte böyle ilerleyelim.

## 3. VM için mevcut olan parametre isimlerinin tespiti
Bundan sonraki adımlarımız benzer sorgulardan oluşacağı için işimiz daha kolay.

- İlk adım olarak Postman arayüzünün sol tarafındaki ağaçtan bir önceki adımda oluşturduğumuz sorguya sağ tuşla tıklayıp 'Duplicate' diyelim. Bu sorgunun yeni bir kopyasını oluşturacak.
- Tests sekmesine kodu silelim, tabi yukarıdaki kod bloğunu eklemişdiyseniz.
- Params sekmesine gidip 'resourceKind' ve 'name' Query parametrelerini silelim.
- URL satırına '/:id/statkeys' uzantısını tırnaklar olmadan ekleyelim.
- Params sekmesinde oluşan 'id' Path Variable değerine ID'yi yapıştıralım.
  - Id'yi 2. adımdan yapıştırabilirsiniz,
  - Ya da, yukarıdaki ekstra adımı yapıp kodu çalıştırdıysanız, '{{vmID}}' olarak yapıştırabilirsiniz.

<img width="734" alt="image" src="https://user-images.githubusercontent.com/25429217/190458489-f4e7c146-5f54-4434-be46-95631c435dce.png">

- Sonrasında 'Send' düğmesini kullanarak sorguyu gönderebiliriz. Herşey doğru ise bize **200** kodu ile birlikte bu VM için vROps tarafından toplanan parametrelerin bir listesi gelecektir.
- Gelen listede içinde 'availability_kpi' geçen key'i aradığımızda bulacağımız cevap aşağıda. Bunu değeri bir sonraki adımda kullanacağız.
```
summary|availability_kpi
```

## 4. VM'in son bir aylık erişilebilirlik değerinin okunması
- İlk adım olarak Postman arayüzünün sol tarafındaki ağaçtan 3. adımda oluşturduğumuz sorguya sağ tuşla tıklayıp 'Duplicate' diyelim. Bu sorgunun yeni bir kopyasını oluşturacak.
- URL satırındaki 'statkeys' kısmını 'stats' olarak düzenleyelim.
- Param sekmesine aşağıdaki 4 Query Parametresini ekleyelim. Bu filtre bize availability_kpi değerlerinin son bir ay içindeki en düşük değerini getirecek.
```
statKey: summary|availability_kpi
rollUpType: MIN
intervalType: MONTHS
intervalQuantifier: 1   
```

<img width="917" alt="image" src="https://user-images.githubusercontent.com/25429217/190488443-b74b880b-3e68-4a54-b71d-bd97f9ce4eef.png">

- Sonrasında 'Send' düğmesini kullanarak sorguyu gönderebiliriz. Herşey doğru ise bize **200** kodu ile birlikte bu VM için vROps tarafından toplanan parametrelerin bir listesi gelecektir.
- Aradığımız değerin objedeki konumu aşağıda. Bu rehber oluşturulurken gözlemlenen en düşük değer **84.6**. Bu da, VM'in son bir ay içinde bir noktada %100 erişilebilirlik hedefimizi ihlal ettiği anlamına geliyor.
```
result.values[0].stat-list.stat[0].data[0]
```

**Tebrikler. Eğer bu egzersizi uygulamalı olarak tamamlayabildiyseniz, artık REST sorguları konusunda kendinizi yetkin hissetmeye ehliyetiniz var.**

Dilerseniz, ve hala yorulmadıysanız, Postman üzerinde oluşturduğumuz bu sorguların farklı programlama dillerindeki muadillerini yine Postman üzerinden inceleyebilirsiniz. Çünkü REST tabanlı entegresyonları gerçek otomasyon senaryolarında kullanabilmek için bir sonraki adım bu sorguları kod içinde gönderebilmek ve okuyabilmek olacak.**