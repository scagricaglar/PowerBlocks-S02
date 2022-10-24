Bu örnekteki dört dosyayı kullanarak kendi ortamınızda Terraform ile bir Sanal Makine oluşturabilirsiniz:
- [terraform.tfvars](./terraform.tfvars) - Bu dosyadaki değişkenleri kendi ortamınıza göre düzenlemeniz gerekiyor.
- [variables.tf](./variables.tf) - Bu dosya taslağın kullanacağı değişken tanımlarını içeriyor. Herhangi bir değişiklik yapmak zorunda değilsiniz.
- [setup.tf](./setup.tf) - Bu dosya Terraform Provider konfigürasyonunu ve 'okunacak' data bloklarını içeriyor. Herhangi bir değişiklik yapmak zorunda değilsiniz.
- [main.tf](./main.tf) - Bu dosya taslağın ana bölümünü oluşturuyor. Bu dosyada değişiklikler yapabilirsiniz:
  - *num_cpus*, *memory* ve *disk.size* değerlerini istediğiniz gibi değiştirebilirsiniz
  - *guest_id* değerini kullanacağınız VM template içindeki işletim sistemine göre değiştirmeniz gerekiyor. Gereken değeri bulmak için [buradaki](https://docs.vmware.com/en/VMware-HCX/4.1/hcx-user-guide/GUID-D4FFCBD6-9FEC-44E5-9E26-1BD0A2A81389.html) tabloları kullanabilirsiniz.

Dosyaları kullanabilmek için, taslakların bulunduğu bilgisayarda Terraform yüklü olması gerekiyor. Platformunuza uygun kurulum adımlarına [buradan](https://www.terraform.io/downloads) ulaşabilirsiniz.

Ardından ilk olarak bu dosyaların bulunduğu klasöre gidip aşağıdaki komutu çalıştırmalısınız:
```
terraform init
```

Init komutu başarılı şekilde çalışırsa aşağıdaki komutla bir kurulum planı çıkartabilirsiniz:
```
terraform plan
```

Plan adımı sorunsuz tamamlandıysa ne âlâ. Aksi halde tespit edilen sorunları gidermeniz gerekecek. Değişkenleri doğru şekilde düzenlendiğinizden emin olmanız ilk adım olacaktır.

Lütfen bir sonraki adıma geçmeden önce Terraform planını dikkatlice inceleyin. Bir sonraki adım, sizden son bir onay aldıktan sonra, VM kurulumuna başlayacaktır.
```
terraform apply
```

Çok tavsiye edilen bir yaklaşım olmasa da, son onayı pas geçmek aşağıdaki komutla mümkün:
```
terraform apply --auto-approve
```

Denemeniz sonrasında eğer Terraform tarafından yaratılan VM'i silmek isterseniz aşağıdaki komutu çalıştırabilirsiniz. Onayınızın ardından bu komutun ilgili VM'i geri dönülemez şekilde sileceğini unutmayın:
```
terraform destroy
```

Yukarıdaki son komutu da sildikten sonra, eğer bir daha deneme yapmayacaksanız, dosyaların bulunduğu klasördeki gizli dosyaları da silebilirsiniz.