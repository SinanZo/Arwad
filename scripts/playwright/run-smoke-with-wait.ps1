Param(
  [string]$url = "http://localhost:4000/",
  [int]$max = 60
)

$i = 0
Write-Output "Waiting for $url ($max s max)..."
while ($i -lt $max) {
  try {
    Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop | Out-Null
    Write-Output 'SERVER_READY'
    break
  } catch {
    Start-Sleep -Seconds 1
    $i = $i + 1
    Write-Output "waiting... $i"
  }
}
if ($i -ge $max) {
  Write-Error 'SERVER_NOT_READY'
  exit 2
}
Start-Sleep -Seconds 1
$out = node scripts/playwright/smoke-test-pages.js $url 2>&1
$out | Out-File -FilePath tmp_smoke_out.txt -Encoding utf8
Get-Content tmp_smoke_out.txt -Raw -Encoding UTF8
