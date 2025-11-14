Playwright smoke tests

Quick commands to run the smoke tests locally (PowerShell):

1. Install dependencies:

```powershell
pnpm install
```

2. Start the dev server (in a separate terminal):

```powershell
pnpm dev -- -p 4000
```

3. Run the smoke tests (this script waits for the server to respond):

```powershell
powershell -File scripts/playwright/run-smoke-with-wait.ps1 http://localhost:4000/ 60
```

Notes:
- The smoke tests set `localStorage.language = 'ar'` before navigation so client-side i18n is applied.
- Output is written as UTF-8 so Arabic text displays correctly in PowerShell when using `Get-Content -Raw -Encoding UTF8`.
- If your app uses background images (CSS) or inline SVGs, the smoke test will report counts for those.
- To run a single-page test, use `node scripts/playwright/smoke-test-pages.js http://localhost:4000/about`.
