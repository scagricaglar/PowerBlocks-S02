<# Bu script parametre olarak verilen Desktop Pool ismini Horizon Connection Server üzerinde bulur ve 'Enable' eder.
Referans amaçlı olarak sağlanmıştır. Lütfen detaylıca inceleyeniz, ortamınıza göre düzenleyiniz ve kendi sorumluluğunuzda kullanınız.
Desktop Pool ismi zorunlu bir parametredir. Eğer bu isimli bir Pool bulunamazsa hata verilerek çıkılacaktır.

Bu script'in mevcut hali ile Horizon Connection Server üzerinde yerel olarak çalışması, kullanıcı bilgilerini yerel ve şifreli
bir dosyadan alması öngörülmüştür. Bu yerel şifreli dosya aşağıdaki powershell komut ile oluşturulabilir. Bu script'i çalıştıracak kullanıcı
ve yerel şifreli dosyayı oluşturan kullanıcı aynı olmalıdır. Kullanıcıya ait şifre değişecek olursa, bu dosya yeniden oluşturulmalıdır.
    Get-Credential | Export-Clixml -Path C:\horizonScripts\credentials.xml

Horizon View API 7.12.0 ile test edilmiştir. Kullanılan API detaylarına aşağıdaki link üzerinden ulaşılabilir:
    https://code.vmware.com/apis/956/view

Hazırlayan: ccaglar@vmware.com#>

param ([string]$poolName)

Import-Module VMware.VimAutomation.HorizonView > $null
Set-PowerCLIConfiguration -InvalidCertificateAction Ignore -ParticipateInCeip $false -Scope Session -Confirm:$false > $null

$horizonServer = Connect-HVServer -server localhost -Credential (Import-Clixml C:\vroScripts\credentials.xml)
$horizonAPI = $horizonServer.ExtensionData

$poolIsmiFiltresi = New-Object VMware.Hv.QueryFilterEquals -Property @{'memberName' = 'desktopSummaryData.name'; 'value' = $poolName}
$poolSorguTanimi = New-Object VMware.Hv.QueryDefinition
$poolSorguTanimi.QueryEntityType = 'DesktopSummaryView'
$poolSorguTanimi.Filter = $poolIsmiFiltresi

$poolSorguServisi = New-Object VMware.Hv.QueryServiceService
$poolSorguSonucu = $poolSorguServisi.QueryService_Query($horizonAPI,$poolSorguTanimi)

if ($poolSorguSonucu.Results.Length -eq 0)
{
    Write-Error ('{0} isimli bir Desktop Pool bulunamadı' -f $poolName) -ErrorAction Stop
}

$dogruPool = $poolSorguSonucu.Results[0]
$dogruPoolId = $dogruPool.Id

$desktopService = New-Object VMware.Hv.DesktopService
$mevcutDurum = $desktopService.Desktop_Get($horizonAPI,$dogruPoolId).DesktopSettings.Enabled

if ($mevcutDurum)
{
    Write-Host ('Desktop Pool halihazırda "Enabled" durumda. Herhangi bir değişiklik yapılmayacak')
} else
{
    $mapEntry = New-Object VMware.Hv.MapEntry
    $mapEntry.Key = 'desktopSettings.enabled'
    $mapEntry.Value = $true
    $mapEntryArray = @($mapEntry)

    $destopService.Desktop_Update($horizonAPI, $dogruPoolId, $mapEntryArray)
    Write-Host ('Desktop Pool hizmete alındı')
}

Disconnect-HVServer '*' -Force -Confirm:$false -ErrorAction SilentlyContinue > $null 