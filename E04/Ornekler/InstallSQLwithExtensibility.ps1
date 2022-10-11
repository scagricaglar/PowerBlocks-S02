<#
.SYNOPSIS
VM olusturduktan sonra ag baglantisi oncesinde ISO uzerinde MS SQL kur.

.DESCRIPTION
Bu script bir vSphere VM'in yasam dongusununda basinda MS SQL kurulumu icin hazırlanmistir. Kurulum ag baglantisina ihtiyac duymaz ve on-demand PaaS senaryolar icin uygundur.
VM'in olusturuldu Host'un erisebildigibi datastore uzerinde kurulum ISO'su yer almalı, VM icinde VMtools yuklu olmali ve SQL Answer dosyasi VM imajinda bulunmalidir.

Script'in bir FaaS ortamında calisacagi varsayilmis, bir Handler fonksiyonu olarak wrap'lenmistir.

.PARAMETER context
FaaS ortami degiskenleri. Script'in bu input'a bagimligi yoktur.

.PARAMETER inputs
FaaS ortamindan saglamasi gereken input'lar. İhtiyac duyulan liste asagidaki sekildedir:
    #inputs List
    #vmName
    #vcenterName
    #vcenterUser
    #isoPath - VMware DataStore üzerindeki iso'nun pathi [datastore1] folder/xx.iso şeklinde
    #guestFilePath - C:\xx.ini şeklinde
    #secureParamaters -  (as Properties with keys: vcenterPassword and vmPassword)
#>

function Handler($context, $inputs) {

    Set-PowerCLIConfiguration -InvalidCertificateAction Ignore -ParticipateInCeip:$false -Scope Session -Confirm:$false > $null
    Connect-VIServer -Server $inputs.vcenterName -User $inputs.vcenterUser -Password $inputs.secureParameters.vcenterPassword > $null

    $cd = Get-VM -Name $inputs.vmName | Get-CDDrive #Tek CD surucusu oldugu varsayilmistir
    Set-CDDrive -CD $cd -Connected $true -IsoPath $inputs.isoPath -Confirm:$false > $null
    Write-Host "SQL iso'su Guest'e bağlandı. Kurulum öncesi bir kaç saniye bekleniyor"
    Start-Sleep -s 10 > $null

    $vm = Get-VM -Name $inputs.vmName #VM isminin unique oldugu varsayilmistir
    $installScript = 'D:\Setup.exe /SQLSVCPASSWORD="{0}" /AGTSVCPASSWORD="{0}" /ASSVCPASSWORD="{0}" /ISSVCPASSWORD="{0}" /RSSVCPASSWORD="{0}" /SAPWD="{0}" /ConfigurationFile={1}' -f $inputs.secureParameters.vmPassword,$inputs.guestFilePath

    $cred = New-Object System.Management.Automation.PSCredential ("administrator", (ConvertTo-SecureString $inputs.secureParameters.vmPassword -AsPlainText -Force))
    Write-Host "SQL kurulumuna başlanıyor"
    $output = Invoke-VMScript -ScriptText $installScript -VM $vm -ScriptType Bat -GuestCredential $cred

    Set-CDDrive -CD $cd -NoMedia -Confirm:$false > $null

    $outputProperties = @{ exitCode = $output.ExitCode; scriptOutput = $output.ScriptOutput}

    return $outputProperties
}
