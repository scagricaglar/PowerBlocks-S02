$surucu = Get-Disk -Number 0

$bosAlan = $surucu.Size - $surucu.AllocatedSize

if (0 -eq $bosAlan)
{
    Write-Host ("changed=no comment='Buyutme icin bos alan yok'")
}
else
{
    $maxBoyut = (Get-PartitionSupportedSize -DriveLetter C).SizeMax
    Resize-Partition -DriveLetter C -Size $maxBoyut
    Write-Host ("changed=yes comment='Disk Boyutu {0}GB olacak sekilde buyutuldu'" -f ([math]::Round($maxBoyut/1GB,2)))
}