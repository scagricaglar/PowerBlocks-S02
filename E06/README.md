# PowerBlock s02e06 - Infra-as-Code & Terraform

Bu bölümde:
- Infra-as-Code terimini ve neden önemli olduğunu konuştuk,
- Yaygın IaC araçlarına çok hızlı bir bakış attık,
- Son yılların en popüler açık kaynak projelerinden biri olan Terraform’u basit bir örnek inceledik,
- ve Terraform kullanmaya nasıl başlayabileceğinizi paylaştık.

Bu bölümde kullanılan çeşitli araçlara ait linkleri aşağıda, çeşitli kod örneklerini bu klasörde bulabilirsiniz.

## Egzersizler:
### Developer.Hashicorp.com
Terraform öğrenmeye başlamak için en iyi kaynak proje lideri tarafından sağlanan ücretiz eğitimler. Aşağıdaki linkte hem -az miktada olsa da, uygulamalı, hem teorik, hem de kendi ortamlarınızda denenebilecek bolca eğitim bulacaksınız.  
Eğer Terraform konusunda bir sertifikasyon niyetiniz varsa, buradaki eğitimler bunun için bile yeterli olacaktır. Ki zaten, sertifika sınavına yönelik modülleri de ücretsiz olarak tüketebilirsiniz.  
[Developer.Hashicorp.com](https://developer.hashicorp.com/terraform/tutorials)

### VMware Pathfinder
Gerçek bir Terraform kullanım senaryorsunu farklı bir kullanım senaryosunda uygulamalı olarak görmek isterseniz aşağıdaki HoL'un 5. modülününün *Automation in NSX: Terraform* başlığını takip edebilirisiniz. Burada sizin için oluşturulmuş gerkeç bir ortamda Terraform kullanma fırsatınız olacak.
[NSX-T Advanced Networking (HOL-2225-02-NET)](https://pathfinder.vmware.com/v3/activity/nsx_adv_hol)

Geçen haftalardaki notları okumayanlar için HoL'lar hakkında ek bilgi:

> [VMware Pathfinder](https://pathfinder.vmware.com) tüm VMware çözümlerine için ürünleri yakından tanıyabileceğiniz interaktif demolar, rehberler, bilgi seviyenizi ölçebileceğiniz 'oyunlar' ve temel eğitimler içeren çok zengin bir kaynak.  
Pathfinder'ın Hands-on-Labs isimli özelliği ise bu haftadan itibaren bizlere egzersizler için çok yardımcı olacak. HoL'lar, özetle, bize kısa süreli ancak o süre içinde isteğimizi yapabilaceğimiz gerçek test ortamları sağlayacak.  
Çoğu HoL VMware tarafından size belli bir kullanım senaryosunu aktarmak için hazırlanıyor. Dolayısı ile her HoL ortamında ilgili kullanım senaryosuna yönelik olarak farklı çözümler yer alabiliyor ve size adımları takip edebileceğiniz bir rehber sunuluyor. Pek tabii ki sunulan adımları takip edip etmemek konusunda tamamen özgürsünüz.  
HoL linkine tıklayıp **START** düğmesin bastığınızda, sizden giriş yapmanızı ya da kayıt olmanızı isteyen yeni bir pencere açılacak. Pathfinder'a daha önce kayıt olmadıysanız burada istenen bilgileri doldurarak hesabınızı oluşturabilirsiniz. Ardından size ait test ortamı bir kaç dakika için ayağa kaldırılacak ve web tarayıcınız üzerinden ortamdaki bir sanal makinenin masa üstüne bağlanabileceksiniz.  
Güvenlik nedeniyle ortam içindeki pano ve internet erişimi kısıtlanmış olacak. Ancak test ortamına dışarıdan birşey yapıştırmak isterseniz (mesela örnek script'lerden birini), web arayüzünün sol üst köşesindeki 'Send Text' düğmesini kullanabilirsiniz.

## Örnekler:
Bu haftaki [örnekler](./Ornekler/) klasöründe kendi ortamınızda da kullanabileceğiniz, basit sanal makine oluşturmaya yarayacak bir Terraform taslağı bulacaksınız. Daha fazla detayı örneğin [beni oku](./Ornekler/vSphere%20with%20Terraform/README.md) dosyasında bulabilirsiniz.

## Kaynaklar
- [Learn Cloud Assembly](https://learncloudassembly.github.io/)
- [Terraform Kurulumu](https://developer.hashicorp.com/terraform/downloads)
- [Terraform Provider for VMware vSphere](https://registry.terraform.io/providers/hashicorp/vsphere/latest/docs)
- [HashiCorp Terraform Eğitimleri](https://developer.hashicorp.com/terraform/tutorials#get-started)