$vcenterBaglanti = Connect-VIServer -User administrator@vsphere.local -Password VMware1! -Server vc.muaddib.lab

$vmListesi = Get-VM -Name *vRA* #İsminde 'vRA' geçen tüm VM'leri al

foreach ($sanalMakine in $vmListesi)
{
    if ((Get-VM $sanalMakine).PowerState -eq "PoweredON") ##VM açıksa
    {
        $guest = Stop-VMGuest $sanalMakine -Confirm:$false ##VM'li güvenli bir şekilde kapat
        while ((Get-VM $sanalMakine).PowerState -eq "PoweredOn") ##VM kapanana kadar 2 saniyede bir kontrol et.
        {
            Start-Sleep -Seconds 2 
        }
    }

    $sanalMakine = Set-VM $sanalMakine -MemoryGB 4 -NumCpu 2 -Confirm:$false  #VM'i yeniden boyutlandır
    
    $sanalMakine = Start-VM $sanalMakine #VM'i başlat
}

$vcenterBaglanti = Disconnect-VIServer $vcenterBaglanti -Confirm:$false -ErrorAction Continue$