Sorguyu oluşturmak için 1. egzersizde görsel olarak izlediğimiz yolu izlememiz yeterli.

Aşağıda ilgili sorgu adım adım oluşturulmuştur ancak aranan cevap sonda yer alandır. Her bir kodu ayrı ayrı çalıştırıp dönen değerleri inceleyebilir ve JSON okuyucu ile karşılaştırabilirsiniz. 

İsmi 'vRA-003320' olan sanal makine vmList listesinin (array) 4. elemanı olduğu için öncelikle bu listenin 3 nolu index'ine girmeliyiz:

```
$obje.vmList[3]
```

VMware Tools versiyonuna ait bilgi bu sanal makinenin 'Guest' objesi altında yer alıyor. Dolayısı ile bir sonraki adım oraya giriş yapmak:

```
$obje.vmList[3].Guest
```

Aradığımız anahtar ise 'ToolsVersion'. Bu değere ulaşamak için ise artık bu key'i okuyabiliriz:

```
$obje.vmList[3].Guest.ToolsVersion
```
<img width="505" alt="image" src="https://user-images.githubusercontent.com/25429217/189738961-ad733eb1-b60e-44e2-919d-ee764e0bc271.png">
