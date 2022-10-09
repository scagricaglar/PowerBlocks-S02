## Bu script yerel 2 sütunlu bir CSV dosyasında bulunan değerleri uygun VM'lerin aynı Custom Attribute 'key'ine yazmak için hazırlanmıştır.
## CSV dosyasının ilk sütunu VM ismi olmalıdır. 2. sütun ise bu VM için uygulanacak 'value' olmalıdır.
## Bu örnek 'key' ismi 'sahip'tir. 

## Script input parametreleri. Bu örnekte 'hardcoded' olarak kullanılan bu değerler input parametresine çevrilebilir.
$vCenter = "vc.muaddib.lab" #Baglanti kurulacak vCenter adresi
$user = "administrator@vsphere.local" #vCenter kullanici ismi. Tag yonetimi ve VM listesine ulasma yetkisi olmalidir
$password = "" #Kullanici sifresi. Bu deger bos birakilirsa calisma sirasinda sorulacaktir
$filePath = "/Users/cagri/Desktop/sahipListesi.csv" #Key value'larinin ve VM isimlerinin bulundugu dosyanin yerel adresi

$csv = Import-Csv -Path $filePath -Delimiter ';' #key:value pair array, her bir satır için. CSV ayracı Delimeter parametresindeki karakterdir.

$ownerTable = @{}

foreach ($satir in $csv) { #Bütün dosyayı oku, daha sonra kolay bir şekilde çağırmak için tek bir hash table oluştur.
    $ownerTable.Add($satir.'VM ismi',$satir.'Sahip') 
}

$baglanti = Connect-VIServer -Server $vCenter -User $user -Password $password #vCenter'a bağlan

New-CustomAttribute -Name 'sahip' -TargetType 'VirtualMachine' #'sahip' isimli yeni bir key oluştur. Bu attribute zaten varsa hata mesajı verecektir. 

$vmList = Get-VM #Envanterdeki tüm VM'leri al

foreach ($vm in $vmList) { #Her bir VM için
    $sahip = $null 
    $vmIsmi = $vm.Name
    $sahip = $ownerTable.$vmIsmi #CSV'deki değeri al
    if ($null -ne $sahip) { #sahip bilgisi mevcut değilse
        Set-Annotation -Entity $vm -CustomAttribute 'sahip' -Value $sahip #Custom Attribute uygula
    }
}

Disconnect-VIServer $baglanti -Confirm:$false