$vCenter = "vc.muaddib.lab"
$user = "administrator@vsphere.local"
$password = "VMware1!"
$filePath = "/Users/cagri/Desktop/sahipListesi.csv"

$csv = Import-Csv -Path $filePath -Delimiter ';' #key:value pair array, her bir satır için.

$ownerTable = @{}

foreach ($satir in $csv) { #daha sonra kolay bir şekilde çağırmak için tek bir hash table oluştur.
    $ownerTable.Add($satir.'VM ismi',$satir.'Sahip') 
}

$baglanti = Connect-VIServer -Server $vCenter -User $user -Password $password 

New-CustomAttribute -Name 'sahip' -TargetType 'VirtualMachine' #Bu attribute zaten varsa hata mesajı verecektir.

$vmList = Get-VM

foreach ($vm in $vmList) {
    $sahip = $null 
    $vmIsmi = $vm.Name
    $sahip = $ownerTable.$vmIsmi
    if ($null -ne $sahip) { #sahip bilgisi mevcut değilse
        Set-Annotation -Entity $vm -CustomAttribute 'sahip' -Value $sahip
    }
}

Disconnect-VIServer $baglanti -Confirm:$false