Param(
  [int]$Pid = 114776,
  [switch]$DropTempStash
n)

# Ensure running elevated
$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
  Write-Error "This script must be run as Administrator. Right-click PowerShell -> Run as Administrator."
  exit 1
}

Write-Output "Inspecting process $Pid..."
$proc = Get-CimInstance Win32_Process -Filter "ProcessId=$Pid" -ErrorAction SilentlyContinue
if (-not $proc) {
  Write-Output "Process $Pid not found. Nothing to do."
  exit 0
}

$proc | Select-Object ProcessId,ParentProcessId,CreationDate,CommandLine,ExecutablePath | Format-List

# Try to get owner (may succeed when elevated)
try {
  $owner = $proc | Invoke-CimMethod -MethodName GetOwner
  Write-Output "Owner: $($owner.Domain)\\$($owner.User) (ReturnValue: $($owner.ReturnValue))"
} catch {
  Write-Warning "Could not get owner info: $($_.Exception.Message)"
}

# Attempt to stop gracefully then force
try {
  Write-Output "Attempting Stop-Process -Id $Pid -Force..."
  Stop-Process -Id $Pid -Force -ErrorAction Stop
  Write-Output "Stopped process $Pid via Stop-Process."
} catch {
  Write-Warning "Stop-Process failed: $($_.Exception.Message). Trying taskkill..."
  try {
    $tk = taskkill /PID $Pid /F
    Write-Output $tk
  } catch {
    Write-Error "taskkill failed: $($_.Exception.Message)"
  }
}

Start-Sleep -Seconds 1
# Confirm
$still = Get-Process -Id $Pid -ErrorAction SilentlyContinue
if ($still) {
  Write-Error "Process $Pid still running. You may need to reboot if termination fails."
} else {
  Write-Output "Process $Pid is no longer running. Cleaning up logs..."
  $files = @('next_dev.log','tmp_smoke_out.txt')
  foreach ($f in $files) {
    $path = Join-Path -Path (Get-Location) -ChildPath $f
    if (Test-Path $path) {
      try {
        Remove-Item $path -Force -ErrorAction Stop
        Write-Output "Removed $f"
      } catch {
        Write-Warning "Could not remove $f: $($_.Exception.Message)"
      }
    } else {
      Write-Output "$f not present"
    }
  }

  if ($DropTempStash) {
    # Look for stash entries mentioning the expected message
    try {
      $stashes = git stash list --pretty=format:"%gd %s" 2>$null
      if ($stashes) {
        $match = $stashes | Select-String -Pattern "temp: stash generated logs" -SimpleMatch
        if ($match) {
          $name = ($match.Line -split ' ')[0]
          Write-Output "Dropping stash $name"
          git stash drop $name
        } else {
          Write-Output "No matching stash found. Run `git stash list` to inspect."
        }
      } else {
        Write-Output "No stash entries found."
      }
    } catch {
      Write-Warning "Git operations failed: $($_.Exception.Message)"
    }
  }
}

Write-Output "Done."