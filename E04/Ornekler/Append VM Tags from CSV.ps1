## Bu script bir önceki Custom Attribute örneğine benzer ancak daha gelişmiş bir örnektir. 
## Çeşitli hata kontrolleri ve durum bilgilendirmeleri eklenmiştir. 
## Bu örnek için kullanılması öngörülmüş CVS dosyasında başlık satırı bulanmaktadır. Dosya 2 sütunlu olmak zorunda değildir ve birden fazla 'key' ait değer içerebilir.


## Script input parametreleri. Bu örnekte 'hardcoded' olarak kullanılan bu değerler input parametresine çevrilebilir.
$vCenter = "vc.muaddib.lab" #Baglanti kurulacak vCenter adresi
$user = "administrator@vsphere.local" #vCenter kullanici ismi. Tag yonetimi ve VM listesine ulasma yetkisi olmalidir
$password = "" #Kullanici sifresi. Bu deger bos birakilirsa calisma sirasinda sorulacaktir
$filePath = "/Users/cagri/Desktop/sahipListesi.csv" #Key value'larinin ve VM isimlerinin bulundugu dosyanin yerel adresi
$fileVmNameHeader = "VM ismi" #Dosyada VM ismini iceren sutunun basligi
$fileValueHeader = "Sahip" #Dosyada key'e ait value'yu iceren sutunun basligi
$tagCategoryName = "Sahip" #vCenter uzerinde olusturulacak/guncellenecek key
$batchLimit = 10 #Bir seferde islem yapilacak VM adedi. Dosyada daha fazla satir yer aliyorsa, goz ardi edilecektir. Test ve kontrol amaçlı kullanılabilir.

if ($password.Length -eq 0) #Sifre script basinde yer almiyorsa
{
    $password = Read-Host ("Lutfen {0} icin {1} kullanicisina ait sifreyi giriniz" -f $vCenter,$user) -MaskInput
}

$baglanti = Connect-VIServer -Server $vCenter -User $user -Password $password 

if ($null -eq $baglanti) { 
    Write-Error ("vCenter baglanti hatasi")
    Exit 1
}

try {
    $csv = Import-Csv -Path $filePath -Delimiter ';' #key:value pair array, her bir satır için
}
catch {
    Write-Error ("Dosya okumada hata olustu")
    Write-Error ("Hata Mesaji: " + $_)
    Exit 1
}

if ($csv.Length -gt $batchLimit) { #Dosyada fazla veri varsa, goz ardi et
    Write-Warning ("Dosyada {0} adetten fazla veri satiri var. Yalnizca ilk {0} veri satiri icin islem yapilacak" -f $batchLimit)
    $csv = $csv[0..($batchLimit-1)]
}

$tagCategory = Get-TagCategory -Name $tagCategoryName -Server $vCenter -ErrorAction:SilentlyContinue

if ($null -ne $tagCategory) { #Tag kategorisi hali hazirda var mi diye kontrol et
    Write-Host ("{0} isimli tag kategorisi {1} isimli vCenter uzerinde bulundu." -f $tagCategoryName, $vCenter)
} else {
    Write-Warning ("{0} isimli tag kategorisi {1} isimli vCenter uzerinde bulunamadi." -f $tagCategoryName, $vCenter)
    $devam = Read-Host ("Yeni tag kategorisi olusturarak devam etmek istiyor musunuz? (Y/N)") #Devam etmek icin kullanici onayi al
    if(($devam -eq 'y') -or ($devam -eq 'Y')){
        Write-Host ("Tag kategorisi yaratiliyor...")
        $tagCategory = New-TagCategory -Name $tagCategoryName -Cardinality Single -EntityType "VirtualMachine" -Server $vCenter #vCenter uzerinde bu Tag Category'i olustur
    } else { #Kullanici onay vermedi. Basaricili olarak cik
        Write-Host ("Script sonlandirildi...")
        Exit 0
    }
}

Write-Host ('-------------------------------------')
Write-Host ("Tag'leme adimi basliyor")
Write-Host ('-------------------------------------')
Write-Host ("Dosyada {0} adet VM icin bilgi bulunuyor" -f $csv.Length)

#Counter'lar
$i=1
$newTags=0
$newTagAssigments=0
$updatedTagAssigments=0
$keptTagAssignments=0
$skippped=0

foreach ($satir in $csv) {  #Dosyada yer alan her bir veri satiri icin...

    Write-Host ("Ilerleme: {0}/{1}" -f $i,$csv.Length)
    $mevcutDeger = $null
    $tag = $null

    $vm = Get-VM -Name $satir.$fileVmNameHeader -Server $vCenter -ErrorAction:SilentlyContinue #Bu satirdaki VM'i vCenter'da bul

    if ($null -eq $vm) { #VM vCenter uzerinde bulunamadi
        Write-Warning ("{0} isimli VM vCenter'da bulunamadi, etiket vurulmayacak" -f $satir.$fileVmNameHeader)
        $skippped++
    } else {
        Write-Host ("{0} isimli VM {1} isimli vCenter üzerinde bulundu" -f $vm.Name, $vm.Uid.Split(":")[0].Split("@")[1]) #VM'i ve vCenter'i teyit et
        Write-Host ("Vurulacak tag= {0}:{1}" -f $tagCategoryName,$satir.$fileValueHeader) #Dosyaya gore olmasi gereken tag'i key:value olarak raporla
        $tag = Get-Tag -Category $tagCategory -Server $vCenter -Name $satir.$fileValueHeader -ErrorAction:SilentlyContinue

        if ($null -eq $tag) { #Bu key:value hai hazirda vCenter'da yok
            Write-Host ("Bu etiket daha önce hic kullanilmamis, olusturuluyor")
            $tag = New-Tag -Name $satir.$fileValueHeader -Category $tagCategory -Server $vCenter
            $newTags++
        }

        $mevcutDeger = Get-TagAssignment -Entity $vm -Category $tagCategory #VM uzerindeki bu key'i al
        
        if ($null -eq $mevcutDeger) { #VM'de bu key yok
            Write-Host("VM icin bu tag kategorisi ilk defa vuruluyor")
            $yeniDeger = New-TagAssignment -Entity $vm -Tag $tag
            $newTagAssigments++
        } elseif ($mevcutDeger.Tag.Name -eq $satir.$fileValueHeader) { #VM icin mevcut key:value halihazirda dogru
            Write-Host("VM icin bu tag dogru, degisiklik yapilmiyor")
            $keptTagAssignments++
        } else { #VM icin key mevcut ancak value yanlis
            Write-Host("VM icin bu tag degistiriliyor. Eski deger: {0}" -f $mevcutDeger.Tag.Name)
            $yeniDeger = Remove-TagAssignment -TagAssignment $mevcutDeger -Confirm:$false #Bu tag cardinal:single olmali. Eski degeri temizle
            $yeniDeger = New-TagAssignment -Entity $vm -Tag $tag
            $updatedTagAssigments++
        }
    }

    $i++
}

Disconnect-VIServer $baglanti -Confirm:$false

Write-Host ('-------------------------------------')
Write-Host ('Ozet:')
Write-Host ("Dosyadaki VM adedi = " + $csv.Length)
Write-Host ('vCenter uzerinde olusturulan yeni tag adedi = ' + $newTags)
Write-Host ('Bu tag ilk defa vurulan VM adedi = ' + $newTagAssigments)
Write-Host ('Mevcut tag degeri guncellenen VM adedi = ' + $updatedTagAssigments)
Write-Host ('Mevcut tag adedi aynen korunan VM adedi = ' + $keptTagAssignments)
Write-Host ('Dosyada yer alip vCenter uzerinde bulunamayan VM adedi = ' + $skippped)