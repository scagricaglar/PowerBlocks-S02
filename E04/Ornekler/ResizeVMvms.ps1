$vcenterBaglanti = Connect-VIServer -User administrator@vsphere.local -Password VMware1! -Server vc.muaddib.lab

$vmListesi = Get-VM -Name *vRA*

foreach ($sanalMakine in $vmListesi)
{
    if ((Get-VM $sanalMakine).PowerState -eq "PoweredON")
    {
        $guest = Stop-VMGuest $sanalMakine -Confirm:$false
        while ((Get-VM $sanalMakine).PowerState -eq "PoweredOn")
        {
            Start-Sleep -Seconds 2 
        }
    }

    $sanalMakine = Set-VM $sanalMakine -MemoryGB 4 -NumCpu 2 -Confirm:$false
    
    $sanalMakine = Start-VM $sanalMakine
}

$vcenterBaglanti = Disconnect-VIServer $vcenterBaglanti -Confirm:$false -ErrorAction Continue$