# PowerBlock s02e04 - PowerCLI & Scripting

Bu bölümde:
- Script'lerin ve PowerCLI'ın ne olduğunu konuştuk,
- Modern otomasyon perspektifi ile script'lerin iyisini ve kötüsünü irdeledik,
- PowerCLI tabanlı gerçek bir kaç script inceledik ve daha fazlasını paylaştık.

Bu bölümde kullanılan çeşitli araçlara ait linkleri aşağıda, çeşitli kod örneklerini bu klasörde bulabilirsiniz.

Biz konularda ilerledikçe, herkes tarafından hiç bir şeye zarar verme riski olmadan yapılabilecek egzersizler hazırlamak imkansız hale geldi. Bu haftadan itibaren egzersizler azalacak ve yerlerini örneklere bırakacak. Artık inceleyeceğimiz araçlar ve de araçların etkileşeceği bileşenler de yine tüm katılımcılarımızın elinin altında bulunmayabilir. Dolayısı bundan sonra sizlere ücretsiz olarak erişip faydalanabileceğiniz ve o haftaki konuya yönelik araçları barındıran VMware Hands-on-Lab ortamları önereceğiz. Aşağıdaki ['Egzerzsizler'](#egzersizler) başlığında HoL'a erişim ve kayıt ile ilgili yönergeleri bulabilirisiniz.

## Örnekler:
Bu haftaki [örnekler](./Ornekler/) klasöründe farklı dönemlerde farklı müşteri taleplerine yönelik olarak hazırlanmış PowerCLI tabanlı PowerShell script'leri bulacaksınız.

Bu örnekleri incelemekte ve direk ya da kısmi olarak dilediğiniz şekilde faydalanmakta özgürsünüz. Ancak paylaşılan kodların yalnızca birer 'örnek' olduklarını, kötü uygulamalar da barındırabileceklerini, her ortamda doğru ve istenen şekilde çalışacaklarının herhangi bir garantisi olmadığını ve kullanımları ile her türlü sorumluluk ve riskin size ait olduğunu lütfen unutmayın.

- Sanal makine tag ve Custome Attribute yönetimi. Toplu Tag ekleme için düşünülmüştür.
  - [CSV dosyasındaki key:value çiflerini vCenter'a Custom Attribute olarak ekle](./Ornekler/Append%20vCenter%20Custom%20Attributes%20from%20CSV.ps1)
  - [CSV dosyasındaki key:value çiflerini vCenter'a VM Tag olarak ekle](./Ornekler/Append%20VM%20Tags%20from%20CSV.ps1)
- Toplu olarak VM yeniden boyutlandırma:
  - [Gerekiyorsa VM'i kapat, CPU&Bellek değiştir, VM'i aç](./Ornekler/ResizeVMvms.ps1)
- Sanal makineden, gerekiyorsa vCenter interaktif sorusuna da cevap vererek, ISO çıkarma:
  - [ISO çıkar ve vCenter yanıt bekliyorsa onay ver](./Ornekler/unmountIso%20with%20Answer.ps1)
- Ağ bağlantısı olmayan sanal makineye CD üzerinden MS SQL kurulumu:
  - [FaaS - ISO bağla, SQL kur ve ISO çıkar](./Ornekler/InstallSQLwithExtensibility.ps1)
- Horizon VDI Pool yönetimi. VDI erişiminin mesai saatleri ile sınırlandırılması için düşünülmüştür.
  - [VMware Horizon VDI Pool aktivasyonu](./Ornekler/horizonEnablePool.ps1)
  - [VMware Horizon VDI Pool deaktivasyonu](./Ornekler/horizonDisablePool.ps1)

## Egzersizler:
[VMware Pathfinder](https://pathfinder.vmware.com) tüm VMware çözümlerine için ürünleri yakından tanıyabileceğiniz interaktif demolar, rehberler, bilgi seviyenizi ölçebileceğiniz 'oyunlar' ve temel eğitimler içeren çok zengin bir kaynak.

Pathfinder'ın Hands-on-Labs isimli özelliği ise bu haftadan itibaren bizlere egzersizler için çok yardımcı olacak. HoL'lar, özetle, bize kısa süreli ancak o süre içinde isteğimizi yapabilaceğimiz gerçek test ortamları sağlayacak. Çoğu HoL VMware tarafından size belli bir kullanım senaryosunu aktarmak için hazırlanıyor. Dolayısı ile her HoL ortamında ilgili kullanım senaryosuna yönelik olarak farklı çözümler yer alabiliyor ve size adımları takip edebileceğiniz bir rehber sunuluyor. Pek tabii ki sunulan adımları takip edip etmek konusunda tamamen özgürsünüz.

Bu hafta için önereceğimiz HoL '[vSphere Lightning Hands-on Lab - HOL-2211-91-SDC](https://pathfinder.vmware.com/activity/hands_on_with_vsphere_6_7)'. Bu test ortamında sizin için oluşturulmuş ve varsayılan olarak 90 dakika boyunca istediğiniz şekilde kullanabileceğiniz küçük bir vSphere kurulumu bulacaksınız. Lab ortamında ayrıcal VS Code ve PowerCLI da kurulu. Dolayısı ile ortamda gönlünüzce PowerCLI denemesi yapabilirsiniz.

Yukarı linke tıklayıp **START** düğmesinde sizden giriş yapmanızı ya da kayıt olmanızı isteyen yeni bir pencere açılacak. Pathfinder'ı daha önce kayıt olmadıysanız buradaki bilgileri doldurarak hesabınızı oluşturabilirsiniz. Ardından size ait test ortamı bir kaç dakika için ayağa kaldırılacak ve web tarayıcınız üzerinden ortamdaki bir sanal makinenin masa üstüne bağlanabileceksiniz.

Güvenlik nedeniyle ortam içindeki pano ve internet erişimi kısıtlanmış olacak. Ancak test ortamına dışarıdan birşey yapıştırmak isterseniz (mesela örnek script'lerden birini), web arayüzünün sol üst köşesindeki 'Send Test' düğmesini kullanabilirsiniz. 

## Kaynaklar:
- [Visual Studio Code](https://code.visualstudio.com)
- [w3Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
- [w3Schools Python Tutorial](https://www.w3schools.com/python/default.asp)
- [PowerShell Scripting - Microsoft Learn](https://learn.microsoft.com/tr-tr/powershell/scripting/)
- [Windows PowerShell ISE](https://learn.microsoft.com/tr-tr/powershell/scripting/windows-powershell/ise/introducing-the-windows-powershell-ise?view=powershell-7.2)
   - [VS Code ISE Modu](https://learn.microsoft.com/en-us/powershell/scripting/dev-cross-plat/vscode/how-to-replicate-the-ise-experience-in-vscode?view=powershell-7.2)
- [VMware PowerCLI](https://developer.vmware.com/powercli)