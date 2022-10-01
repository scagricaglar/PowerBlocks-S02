Bu egzersizde basit bir algoritma oluşturma egzersizi yapacağız. 

Aşağıdaki öyküyü okumanızı ve bu senaryoda bankaya kredi kararı konusunda yardım edecek bir algoritma yazmanızı rica ediyorum.

Bu egzerisizi tamamlayabilmek için herhangi bir programalama dili bilmenenize gerek yok. Özellikle daha önce herhangi programalama tecrübeniz yoksa, lütfen burada amacımızın 'çalışacak' bir kod yazmak olmadığını unutmayın. 

Sentakstan(syntax) çok temel program akışına odaklanın ve böyle bir kodun neye benzemesi gerekitiğini, şartlı ifadelerin ve döngülerin nerelerde kullanılacağını bulmaya çalışın. Algoritma kağıt üstünde doğru duruyorsa onu istediğimiz programlama diline dönüştürmek çok da zor olmayacaktır.

Metinde bazı değişkenlerin sayısal değerlerinin verilmediğini göreceksiniz. Algoritmanız da tam olarak bu kurguya uygun olmalı, farklı değerler için çalışmalı. Unutmayın, önceden bilmediğiniz her değer bir parametrik değerdir ve bir değişken olarak ele alınabilir.

Algoritmanızın hazır olduğunu düşündüğünüz noktada [çözüme](./algoritma.js) geçebilirsiniz. Çözüm JavaScript dilinde. Çözümü detaylıca incelemek ve kendi algoritmanız ile ne kadar örtüştüğünü görmek de bu egzersizin önemli bir adımı.

Pek tabii ki algoritmayı kurgulamanın birden fazla yolu olabilir. Çözümde sunulandan farklı ancak doğru çalışan algoritmalarınızı da lütfen benimle paylaşın.

## Başlangıç:
Günlerden bir gün Ali kredi çekmek için bankaya başvurur. Banka biraz şuursuzdur, kredi başvularını değerlendirirken tek bir kriteleri vardır: Başvuru sahibi kaç paralık adamdır?

Ali'nin toplam parası 20.000TL'den az değilse kredi başvurusu onaylanacaktır. Eksikse, oluru yoktur. 

Banka Ali'ye sorar: Ne kadar paranız var? Soru basittir ama cevaplamak Ali için hiç de kolay değildir. Çünkü Ali bugüne kadar paraya hiç değer vermemiş, mal varlıklarını hiç takip etmemiştir. Yıllardır parası bir kenarda birikmiş, hiç harcama yapmamıştır. Ama şu an ne kadar parası vardır?

Ali düşüncelere dalar:

- Ali'nin eline ilk geçen para babasının kendisine yıllar önce verdiği **_harclik_** TL dir.
- Ali sokakta 20 TL bulduğu günü dün gibi hatırlamaktadır. 3 kişiye 'sizin mi' diye sorduktan sonra mutlulukla cebe atmıştır.
- Ali'nin emin olmadığı birşey vardır. Sanki bir gece aksaçlı bir dede ona 200 TL daha vermiştir. Eğer rüya değildiyse, bu para da cepte.
- Ali bir noktada mevcut tüm parasını kriptoya yatırmış, parası 20'ye katlayınca çekmiştir. Doğru zamanda girip doğru zamanda çıkanlardandır Ali. Zamanında daha çok parası olsaydı, şimdiye Bitcoin milyoneriydi.
- Ali, kardeşi Veli doğduğu gün tüm parasını vadeli hesaba yatırmaya karar verir. Banka yıllık %10 faiz vermektedir. Veli **_velininYasi_** yaşına gelene kadar Ali o vadeli hesaba hiç dokunmaz.
- Ali'nin aklına **_alininMirasYasi_** yaşındayken aldığı miras haberi gelir. Miras aslında 10.000 TL'dir. Ancak bu parayı Ali hemen alamamış, Ali 18 yaşına gelene kadar para her sene %5 değer kazanmıştır. Ali 18 yaşına girdiği gün miras parasını faizleri ile birlikte almıştır.

Acaba Ali'nin başvurusu onaylanacak mıdır? 