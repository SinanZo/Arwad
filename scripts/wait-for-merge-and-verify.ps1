param(
  [int]$PR=3,
  [string]$Repo='SinanZo/Arwad',
  [int]$Interval=30,
  [int]$MaxMinutes=120
)
$maxIter = [math]::Ceiling($MaxMinutes*60/$Interval)
$logFile='tmp_post_merge_run.log'
function Log($m){ "$((Get-Date).ToString('s')) - $m" | Out-File -FilePath $logFile -Append }
Log "Starting poll for PR $PR"
for ($i=0;$i -lt $maxIter;$i++){
  try {
    $merged = gh pr view $PR -R $Repo --json mergedAt --jq '.mergedAt' 2>$null
  } catch { $merged = $null }
  if ($merged -and $merged -ne ''){
    Log "PR merged at $merged"
    goto VERIFY
  }
  Log "Not merged yet ($($i+1)/$maxIter)"
  Start-Sleep -Seconds $Interval
}
Log "Timeout waiting for merge after $MaxMinutes minutes."
exit 2
:VERIFY
Log "Running post-merge verification..."
try {
  git checkout main 2>&1 | Out-File -FilePath $logFile -Append
  git pull origin main 2>&1 | Out-File -FilePath $logFile -Append
  pnpm install 2>&1 | Out-File -FilePath $logFile -Append
  pnpm build 2>&1 | Out-File -FilePath $logFile -Append
  $proc = Start-Process -FilePath pnpm -ArgumentList 'exec','next','start','-p','4000' -PassThru
  Log "Started server PID $($proc.Id)"
  npx wait-on http://localhost:4000 --timeout 120000 2>&1 | Out-File -FilePath $logFile -Append
  Log "Server ready, running tests..."
  node scripts/playwright/smoke-test-pages.js http://localhost:4000/ 2>&1 | Out-File -FilePath tmp_run_smoke.json -Encoding utf8
  node scripts/playwright/screenshot-test.js http://localhost:4000/ 2>&1 | Out-File -FilePath tmp_run_screenshots.json -Encoding utf8
  node scripts/playwright/a11y-test.js http://localhost:4000/ 2>&1 | Out-File -FilePath tmp_run_a11y.json -Encoding utf8
  Log "Tests complete, stopping server..."
  Stop-Process -Id $proc.Id -Force
  $comment = "Post-merge verification completed.`n`nSmoke: see tmp_run_smoke.json`nScreenshots: tmp_screenshots/`nA11y: tmp_a11y/`nLogs: tmp_post_merge_run.log"
  $comment | Out-File -FilePath tmp_post_merge_comment.md -Encoding utf8
  gh pr comment $PR -R $Repo --body-file tmp_post_merge_comment.md
  Log "Posted PR comment and finished."
} catch {
  Log "Error during verification: $_"
  exit 3
}
exit 0
