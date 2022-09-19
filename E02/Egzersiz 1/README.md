Bu egzersizde amaç ilk defa REST API kullanacak kişiler için biraz tecrübe kazanıp, biraz da eğlenebilecekleri bir senaryo sunmaktır. Daha zorlu bir egzersiz isteyenler, bu örnektekilerden daha gelişmiş bir API sunan vRealize Operations ile çalışmak için [ikinci ezgersize](../Egzersiz%202) göz atabilirler.

Senaryoyu takip edeceklerin aşağıdaki adımları tamamlamaları gerekmektedir:
- 1979 yılının en popüler filminin ismini bulmak
- Bu filmin isminin İspanyolca'daki karşılığını bulmak

Senaryo sırasında 2 farklı API ile etkileşmek, 2 farklı API dokümantasyonunu incelemek ve JSON okuyabilmek gerekecektir.

Bu egzersizi tamamlamanın en kolay yolu seansda da bahsedilen [Postman](https://www.postman.com/downloads) aracını kullanmak olacak. Postman'i bilgisayırınıza indirmeniz tavsiyemdir. Ancak bu egzersizdeki tüm adresler internete açık olduğu için, web versiyonunu da kullanabilirsiniz.

Postman kullanmak istemiyor, kullanmak istiyor ama kullanamıyor ya da kendinizi komut satırında rahat hissediyorsanız egzersizleri Mac ve Linux'de cURL ile, Windows'ta PowerShell ile de takip edebilirsiniz. Çözüm dökümanında her 3 alternatif de yer alacak. Ve Postman kullananların da diğer çözümlere göz atmalarında fayda var.

## 1. 1979 yılının en popüler filminin ismini bulmak
Bu konuda görüş alacağımız platform [Trakt.tv](https://trakt.tv/). Trakt izlediğiniz filmlerin ve dizilerin takibini yapabileceğiniz güzel bir platform. Ama bizim burayı kullanacak olma sebeplerimiz dilediğimizce kurcalayabileceğimiz bir staging ortamı sunması ve API'nın iyi dokümante edilmiş olması. Bu egzersizde, kolaylık adına, authentication gerektiren işlemler yapılmayacak. Ama platform ilginizi çekecek olursa, pek tabii ki kendi hesabınızı açabilir ve daha farklı şeyler yapabilirsiniz.

Bu adımı başarı ile tanımlamak için tek bir REST GET sorgusu yeterli. Bu sorguyu oluşturmak için ihtiyaç duyacağımız her şey ise [bu dokümanda](https://trakt.docs.apiary.io/#) yer alıyor. Bu doküman ve aşağıdaki tavsiyeleri kullanarak cevaba ulaşabilirsiniz. Herhangi bir adımda takılacak olursanız [çözüme](./cozum1.md) göz atabilirsiniz.

- Sorguyu göndereceğimiz baz endpoint aşağıdaki şekilde. Bu bilgi dokümanın [API URL](https://trakt.docs.apiary.io/#introduction/api-url) başlığında yer alıyor.
```
https://api-staging.trakt.tv
```
- Bu adımda platforma 'Authentication' yapmamıza gerek yok. Ancak yine de [Authentication - OAuth](https://trakt.docs.apiary.io/#reference/authentication-oauth) başlığını incelemenizde fayda var. Eğer platformla bu egzersiz kapsamı dışında etkileşmek isteyecek olursanız bu bölümdeki adımları takip ederek kendi 'client_id', 'client_secret' ve 'access_token' değerlerinizi oluşturabilirsiniz.

- Sorguyu göndereceğimiz kaynak '/movies/popular'. Bu kaynağın kullanımı [Movies](https://trakt.docs.apiary.io/#reference/movies/popular/get-popular-movies) başlığında detaylandırılıyor.

- Bu sorgu Authentication istemese de, Header olarak bir client_id istiyor. Tercih sizin; sizin için oluşturduğum 'client_id'yi kullanabilir ya da [linkteki](https://staging.trakt.tv/oauth/applications/new) formu doldurarak kendi API uygulamanızı oluşturabilirsiniz. Bunun için platformda yeni hesap oluşturmanız gerekecek.
```
--header "trakt-api-key: cf142046867c94be40c84aefd1b2361e4776e7183af406ce00da5f7d5b72438c"
```

- Sorguyu dokümandaki örneğe benzer şekilde asgari haliyle gönderdiğimizde gelecek obje tüm yıllara yönelik bir cevap olacak. Öte yandan dokümanda bu kaynağın filtreleri desteklediği sembol ile gösteriliyor. Filtre kullanımı ise dokümanın [Filters](https://trakt.docs.apiary.io/#introduction/filters) başlığında açıklanmış durumda. İstediğimiz yıla ait veriyi almak için 1979 yılına yönelik bir filtreyi sorguya query string olarak eklememiz yeterli.

- Doğru sorguyu platforma gönderdiğimizde bize **200** Response kodu ve 9 elemanlı bir JSON Array (liste) döndürecek. Aradığımız cevap listenin en başındaki objenin 'title' key'i

**Bir sonraki adıma geçmeden önce [çözüme](./cozum1.md) göz atıp cevabınızı teyit etmeyi unutmayın.**

## 2. Bu filmin isminin İspanyolca'daki karşılığını bulmak
Bu adımda tercüme için [Oxford Dictionary](https://www.oed.com) platformundan yaralanacağız. Egzersizde bu platformu tercih etmemizin sebebi biraz daha zayıf bir dokümantasyona ve ama biraz daha karmaşık bir obje şemasına sahip olması. Ama birinci adımı tamamlayabildiyseniz, bu adımı da tamamlayabileceğinizi göreceksiniz.

Bu API bir 'Authentication' gerektiriyor ve gerekli hesap ile parametreler sizin için sağlanmış durumda. Sağlanan hesap toplamda 1000 adet sorguya müsade edecek ve hepimiz ortak kullanacak. Dolayısıyla egzersiz sırasında sorgu sayınızı makul seviyede tutmanız ricamızdır. Dilerseniz [bu formu](https://developer.oxforddictionaries.com/signup?plan_ids[]=2357356361005) doldurarak platfroma kaydolabilir ve kendi hesap bilgilerinizi alabilirsiniz.

Bu adımı başarı ile tamamlamak için yine tek bir REST GET sorgusu yeterli. Bu sorguyu oluşturmak için ihtiyaç duyacağımız her şey ise [bu dokümanda](https://developer.oxforddictionaries.com/documentation) yer alıyor. Bu doküman ve aşağıdaki tavsiyeleri kullanarak cevaba ulaşabilirsiniz. Herhangi bir adımda takılacak olursanız [çözüme](./cozum2.md) göz atabilirsiniz.

- Sorguyu göndereceğimiz baz endpoint aşağıdaki şekilde. Bu bilgi dokümanın [Getting Started](https://developer.oxforddictionaries.com/documentation/getting_started) başlığındaki örnekte yer alıyor.
```
https://od-api.oxforddictionaries.com/api/v2
```
- Sorguyu göndereceğimiz kaynak '/translations'. Bu kaynağın kullanımı [dokümanda](https://developer.oxforddictionaries.com/documentation) detaylandırılıyor. Bu kaynağın kullanım detaylarını incelemek için bu sayfada önce 'Translations' düğmesine, sonra da 'Expand Operations' düğmesine basmamız gerekiyor.

<img width="480" alt="image" src="https://user-images.githubusercontent.com/25429217/190342081-716d522b-6a2f-4497-88c1-99ff4b745687.png">

- Kaynağın kullanım şeklini incelediğinizde 'kaynak dil' ve 'hedef dil' değerlerine ihtiyacınız olduğunu fark edeceksiniz. Dil kodları [Supported languages](https://developer.oxforddictionaries.com/documentation/languages) sayfasında sıralanıyor. Kullanacağımız değerler, sırasıyla, 'en-us' ve 'es'. 

- Sorgunun son parçası tercümesini istediğimiz kelime olacak. Kelimeyi bu egzersizin birinci adımında bulduk. 

- Bu sorguda Authentication için 2 farklı 'key:value' çiftinin header içinde gönderilmesini gerekiyor. Yöntem [Making requests to the API](https://developer.oxforddictionaries.com/documentation/making-requests-to-the-api) başlığında detaylandırılıyor. İncelemenizin ardından egzersiz için aşağıdaki parametreleri kullanabilirsiniz. Ya da, bu adımın başında belirtilen şekilde, platformda yeni bir hesap açabilirsiniz.
```
app_id: 15e84321
app_key: fb8269fb3de8f799c12bc2bc9c91b5d1
```
- Doğru sorguyu platforma gönderdiğimizde bize **200** Response kodu ve nispeten kompleks bir obje gönderecek. Cevabı inceleyebilmek için harici bir JSON görüntüleyiciye ihtiyacınız olacak. Farklı tercümeleri objenin içinde 'results' array'inde bulabilsiniz.

- Objeyi doğru olarak alabildiğinizde aslında bu adımı teknik olarak tamamlamış olacaksınız. Ama gelen objeyi incelemek güzel bir egzersiz olacaktır. Aradğımız doğru çeviri bu kelimenin isim (noun) ve bilim kurguda (in science fiction) kullanılan hali. Detayları [çözümde](./cozum2.md) bulabilirsiniz.

**Bu egzersizi tamamladıktan sonra, [ikinci ezgersizi](../Egzersiz%202) deneyebilirisiniz.**
