$vCenter = "vc.muaddib.lab"
$user = "administrator@vsphere.local"
$password = "VMware1!"
$vmID = "502bd91e-d055-b9e2-3e68-3bf7c51cc220"

Set-PowerCLIConfiguration -InvalidCertificateAction Ignore -ParticipateInCeip:$false -Scope Session -Confirm:$false > $null
$vcenterBaglanti = Connect-VIServer -Server $vCenter -User $user -Password $password
$sessionID = $vcenterBaglanti.SessionId

$startUnmount = {
    param ($sessionID,$vCenter,$vmID)
    $tempBaglanti = Connect-VIServer -Server $vCenter -Session $sessionID

    $cd = Get-VM -Id $vmID | Get-CDDrive
    Set-CDDrive -CD $cd -NoMedia -Confirm:$false > $null
    Write-Host ("ISO Basari ile cikarildi")

}

$is = Start-Job -ScriptBlock $startUnmount -ArgumentList @($sessionID,$vCenter,$vmID)

Start-Sleep -Seconds 10 > $null

Receive-Job $is > $null

if ($is.State -eq "Running")
{
    $vm = Get-VM -Id $vmID
    $question = Get-VMQuestion -VM $vm
    Set-VMQuestion -VMQuestion $question -Option "button.yes" -Confirm:$false > $null
}

Wait-Job $is > $null
Disconnect-VIServer $vcenterBaglanti -Confirm:$false -ErrorAction Continue > $null