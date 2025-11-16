Param(
  [string]$url = "http://localhost:4000/",
  [int]$timeoutSec = 120
)

Write-Output "Starting dev server on 4000 as background job..."
$job = Start-Job -ScriptBlock {
  Set-Location "c:\Users\Sinan Zuaiter\Arwad\New Arwad"
  pnpm dev:4000
}

$ready = $false
$start = Get-Date
Write-Output "Waiting for $url (timeout ${timeoutSec}s)..."
while (-not $ready -and ((Get-Date) - $start).TotalSeconds -lt $timeoutSec) {
  try {
    Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop | Out-Null
    $ready = $true
  } catch {
    Start-Sleep -Seconds 1
  }
}

if (-not $ready) {
  Write-Error "Server did not become ready within $timeoutSec seconds."
  Stop-Job $job.Id -Force | Out-Null
  Receive-Job $job.Id | Out-Null
  Remove-Job $job.Id | Out-Null
  exit 2
}

Write-Output 'SERVER_READY - running smoke + screenshots + a11y...'

$exitCode = 0
$errCount = 0

try {
  $smokeOut = "tmp_run_smoke.json"
  $shotsOut = "tmp_run_screenshots.json"
  $a11yOut  = "tmp_run_a11y.json"
  $metaOut  = "tmp_verify_meta.json"

  try {
    pnpm exec playwright install chromium 2>&1 | Out-Null
  } catch {}

  try {
    node scripts/playwright/smoke-test-pages.js $url 2>&1 | Out-File -FilePath $smokeOut -Encoding utf8
  } catch {
    $errCount++
    "{`"error`":`"smoke failed: $($_.Exception.Message)`"}" | Out-File -FilePath $smokeOut -Encoding utf8
  }

  try {
    node scripts/playwright/screenshot-test.js $url 2>&1 | Out-File -FilePath $shotsOut -Encoding utf8
  } catch {
    $errCount++
    "{`"error`":`"screenshots failed: $($_.Exception.Message)`"}" | Out-File -FilePath $shotsOut -Encoding utf8
  }

  try {
    node scripts/playwright/a11y-test.js $url 2>&1 | Out-File -FilePath $a11yOut -Encoding utf8
  } catch {
    $errCount++
    "{`"error`":`"a11y failed: $($_.Exception.Message)`"}" | Out-File -FilePath $a11yOut -Encoding utf8
  }

  try {
    node scripts/verify-meta.js $url 2>&1 | Out-File -FilePath $metaOut -Encoding utf8
  } catch {
    $errCount++
    "{`"error`":`"meta verify failed: $($_.Exception.Message)`"}" | Out-File -FilePath $metaOut -Encoding utf8
  }

  Write-Output "Smoke output saved: $smokeOut"
  Write-Output "Screenshots output saved: $shotsOut"
  Write-Output "A11y output saved: $a11yOut"
  Write-Output "Meta output saved: $metaOut"
} catch {
  Write-Error $_
  $exitCode = 1
} finally {
  try { Stop-Job $job.Id -Force | Out-Null } catch {}
  try { Receive-Job $job.Id | Out-Null } catch {}
  try { Remove-Job $job.Id | Out-Null } catch {}
}

if ($exitCode -eq 0 -and $errCount -eq 0) {
  Write-Output 'LOCAL_CHECKS_OK'
} else {
  Write-Output 'LOCAL_CHECKS_FAILED'
}

exit $exitCode
