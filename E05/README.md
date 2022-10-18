# PowerBlock s02e05 - Orkestrasyon

Bu bölümde:
- BT otomasyonu kapsamında ‘Orkestrasyon’ teriminden ne anlaşılması gerektiğini konuştuk,
- Orkestrasyon araçlarında olması gereken temel özellikleri sıraladık,
- Modern otomasyon yaklaşımlarında orkestrasyon araçlarının yerini inceledik,
- ve VMware vRealize Orchestrator çözümüne hızlı bir bakış attık.

## Egzersizler:
vRealize Orchestrator ilk kez görenler için karışıkmış gibi dursa da, yetkinlikleri düşünülünce kullanımı nispeten basit bir araç. Tek yapmanız gereken ona ve kendinize biraz zaman tanımak, birlikte biraz kaliteli vakit geçirmek..

Eğer vSphere kullanıcısı iseniz, vRO'yu aşağıdaki linkten indirip ortamınıza kurabilir ve kurcalamaya başlayabilirsiniz:
- [VMware vRealize Orchestrator Appliance 8.10.0](https://customerconnect.vmware.com/downloads/details?downloadGroup=VROVA-8100&productId=1345&rPId=95218)

vRO kurulumu için detaylı adımlar ise aşağıdaki dokümanda yer alıyor:
- [Installing and Configuring VMware vRealize Orchestrator](https://docs.vmware.com/en/vRealize-Orchestrator/8.10/com.vmware.vrealize.orchestrator-install-config.doc/GUID-64F03876-2EAB-4DB3-A95D-89842425FF7A.html)

Ürün hakkında bir miktar tecrübe kazanmak isteyenler, ürünü henüz kurmak istemeyenler, ya da kuracak ortamı bulunmayanlar için ise çok güzel bir Hands-on-Lab önerim var:
- [Getting Started with vRealize Orchestrator - HOL-2201-13-CMP](https://pathfinder.vmware.com/v3/activity/vrealize_orchestrator_hol) 

Bu lab'da vRO'ya genel bir bakıştan orta seviye kullanım senaryolarına kadar pek çok modül bulacaksınız. Uygulamalı bir eğitim gibi düşünebilirsiniz.

Geçen haftaki notları okumayanlar için HoL'lar hakkında ek bilgi:

> [VMware Pathfinder](https://pathfinder.vmware.com) tüm VMware çözümlerine için ürünleri yakından tanıyabileceğiniz interaktif demolar, rehberler, bilgi seviyenizi ölçebileceğiniz 'oyunlar' ve temel eğitimler içeren çok zengin bir kaynak.  
Pathfinder'ın Hands-on-Labs isimli özelliği ise bu haftadan itibaren bizlere egzersizler için çok yardımcı olacak. HoL'lar, özetle, bize kısa süreli ancak o süre içinde isteğimizi yapabilaceğimiz gerçek test ortamları sağlayacak.  
Çoğu HoL VMware tarafından size belli bir kullanım senaryosunu aktarmak için hazırlanıyor. Dolayısı ile her HoL ortamında ilgili kullanım senaryosuna yönelik olarak farklı çözümler yer alabiliyor ve size adımları takip edebileceğiniz bir rehber sunuluyor. Pek tabii ki sunulan adımları takip edip etmemek konusunda tamamen özgürsünüz.  
HoL linkine tıklayıp **START** düğmesin bastığınızda, sizden giriş yapmanızı ya da kayıt olmanızı isteyen yeni bir pencere açılacak. Pathfinder'a daha önce kayıt olmadıysanız burada istenen bilgileri doldurarak hesabınızı oluşturabilirsiniz. Ardından size ait test ortamı bir kaç dakika için ayağa kaldırılacak ve web tarayıcınız üzerinden ortamdaki bir sanal makinenin masa üstüne bağlanabileceksiniz.  
Güvenlik nedeniyle ortam içindeki pano ve internet erişimi kısıtlanmış olacak. Ancak test ortamına dışarıdan birşey yapıştırmak isterseniz (mesela örnek script'lerden birini), web arayüzünün sol üst köşesindeki 'Send Text' düğmesini kullanabilirsiniz.