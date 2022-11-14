# PowerBlock s02e09 - Konfigürasyon Yönetimi & SaltStack

'Konfigürasyon Yönetimi' oldukça eski ancak anlamaı değişmekte olan bir terim. Modern konfigürasyon yönetimi, izlemeye ve takip etmeye dayalı eski pasif metodların aksine, deklaratif ve kod olarak olarak önceden tanımlanmış konfigürasyonların aktif olarak uygulanmasına dayanıyor. Bu araçların en iyilerinin yaratıcıları ise açık kaynak topluluklar.

Bu bölümde:
- Modern konfigürasyon yönetimi araçlarını ve ne vaat ettiklerini konuştuk,
- En popüler deklaratif konfigürasyon yönetimi araçlarından biri olan açık kaynak Salt projesini inceledik,
- ‘Idempotency’ terimini ve modern otomasyon için neden önemli olduğunu irdeledik,
- Açık kaynak Salt projesi ile kurumsal SaltStack Config (Enterprise) arasındaki farkları gördük.


Bu bölümde kullanılan çeşitli araçlara ait linkleri aşağıda, çeşitli kod örneklerini bu klasörde bulabilirsiniz.

## Egzersizler:
Hem SaltStack hem de Ansible açık kaynak projeler olduğu için bu çözümleri kendi ortamlarınızda denemeniz nispeten kolay.  
  
Ancak başlangıçta kurulumlar ve entegrasyonlar ile uğraşmak istemezseniz aşağıdaki HoL'dan faydalabilirsiniz. Bu ortamda SaltStack'in hem açık kaynak yetkinliklerini hem de kurumsal varyantının özelliklerini deneyebilirsiniz.  
  
[Getting Started with vRealize Automation SaltStack Config (HOL-2206-05-CMP)](https://pathfinder.vmware.com/v3/activity/vrealize_automation_saltstack_hol)

## Örnekler:
Bu haftaki [örnekler](./Ornekler/) klasöründe iki farklı Salt State göreceksiniz. Salt'a dair pek çok kolay örneğe kolayca ulaşmak zaten mümkün. O yüzden buradan nispeten orta zorlukta ve sahada gerçekten kullanımda olan örnekler paylaşıyoruz.

- [Windows Day0 Konfigürasyonu](./Ornekler/WindowsDay0.sls): Bu örnekte yeni kurulmuş Windows bir sunucuyu ilk kullanım öncesinde hazırlayacak bir konfigürasyon göreceksiniz.  
  
  Bu sls dosyası makineyi Domaine kayıt edecek, yerel kullanıcıları oluşturucak, belirtilen sunucu tipine göre gerekli uygulamaları kuracak ve gerekli yamaların kurulduğundan emin olacaktır.

- [RHEL ve Windows sunucular için disk genişletme](./Ornekler/DiskGenislet/): Bu örnek Jinja kullanımına ve merkezi olarak yerel script kullanımına dair güzel örnekler sunmaktadır.  
    
  Bu state 'init.sls' dosyası ile başlar. init.sls işletim sistemine göre ne yapılacağına karar verir ve ilgili alt dosyayı çağırır. Linux için 2 farklı LVM büyütme metodu denenir, Windows için ise Salt üzerinden saklanan bir PowerShell Script'i güvenli bir şekilde yerel script olarak çağırılır.  
    
  PowerShell Script'i Salt State motoru ile uyumlu şekilde hazırlandığı için *Write-Host* satırları güzel bir uygulama örneğidir.

## Kaynaklar
- [Salt Projesi Ana Sayfası](https://saltproject.io/)
- [Açık kaynak Salt Kurulumu](https://docs.saltproject.io/salt/install-guide/en/latest/)
- [Açık kaynak Salt Kullanım Klavuzu](https://docs.saltproject.io/salt/user-guide/en/latest/topics/overview.html)
- [Salt Modül Listesi](https://docs.saltproject.io/en/latest/py-modindex.html)
- [VM Tools Salt Minion Aktivasyonu](https://docs.vmware.com/en/VMware-Tools/12.1.0/com.vmware.vsphere.vmwaretools.doc/GUID-373CD922-AF80-4B76-B19B-17F83B8B0972.html)