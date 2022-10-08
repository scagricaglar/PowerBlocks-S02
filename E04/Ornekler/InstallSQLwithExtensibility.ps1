function Handler($context, $inputs) {

    #inputs List
    #vmName
    #vcenterName
    #vcenterUser
    #isoPath - VMware DataStore üzerindeki iso'nun pathi [datastore1] folder/xx.iso şeklinde
    #guestFilePath - C:\xx.ini şeklinde
    #secureParamaters -  (as Properties with keys: vcenterPassword and vmPassword)

    Set-PowerCLIConfiguration -InvalidCertificateAction Ignore -ParticipateInCeip:$false -Scope Session -Confirm:$false > $null
    Connect-VIServer -Server $inputs.vcenterName -User $inputs.vcenterUser -Password $inputs.secureParameters.vcenterPassword > $null

    $cd = Get-VM -Name $inputs.vmName | Get-CDDrive
    Set-CDDrive -CD $cd -Connected $true -IsoPath $inputs.isoPath -Confirm:$false > $null
    Write-Host "SQL iso'su Guest'e bağlandı. Kurulum öncesi bir kaç saniye bekleniyor"
    Start-Sleep -s 10 > $null

    $vm = Get-VM -Name $inputs.vmName
    $installScript = 'D:\Setup.exe /SQLSVCPASSWORD="{0}" /AGTSVCPASSWORD="{0}" /ASSVCPASSWORD="{0}" /ISSVCPASSWORD="{0}" /RSSVCPASSWORD="{0}" /SAPWD="{0}" /ConfigurationFile={1}' -f $inputs.secureParameters.vmPassword,$inputs.guestFilePath

    $cred = New-Object System.Management.Automation.PSCredential ("administrator", (ConvertTo-SecureString $inputs.secureParameters.vmPassword -AsPlainText -Force))
    Write-Host "SQL kurulumuna başlanıyor"
    $output = Invoke-VMScript -ScriptText $installScript -VM $vm -ScriptType Bat -GuestCredential $cred

    Set-CDDrive -CD $cd -NoMedia -Confirm:$false > $null

    $outputProperties = @{ exitCode = $output.ExitCode; scriptOutput = $output.ScriptOutput}

    return $outputProperties
}
