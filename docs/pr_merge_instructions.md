PR #3 — Merge instructions
===========================

Summary
-------

This branch `ci/visual-screenshots` updates the Playwright CI workflows and fixes the language/i18n issues:

- Pins CI runner to `ubuntu-22.04` and Node to `20`
- Replaces deprecated Playwright action with an explicit browser install step (`npx playwright install --with-deps`)
- Uses a safer server start command (`pnpm exec next start -p <port>`) and increases wait/dump on failure
- Fixes malformed i18n JSON and ensures Arabic brand reads `أرواد`
- Adds a client language provider to fix hydration races and updates components
- Adds placeholder images and Playwright smoke/screenshot/a11y scripts

Why merge
---------

The branch contains CI fixes that make Playwright smoke and screenshot jobs reliable on GitHub Actions, and front-end fixes that make the app runnable locally with `npm install && npm run dev` (or `pnpm install && pnpm dev`). The CI runs for this branch have passed the smoke and visual screenshot jobs.

Suggested PR comment (copy-paste)
--------------------------------

The `ci/visual-screenshots` branch contains CI and i18n fixes required for reliable Playwright smoke/screenshot runs and to make the app runnable locally.

Key results:
- Playwright smoke and visual screenshot jobs succeed on this branch (runner pinned to ubuntu-22.04; explicit browser install added).
- Local smoke tests produce screenshots and a11y reports under `tmp_screenshots/` and `tmp_a11y/`.
- Arabic brand renders as `أرواد` and the language switcher/hydration issues were addressed.

Please review and merge when ready. After merging I can run the post-merge verification and attach screenshots/a11y artifacts to the PR if you prefer.

CLI steps (for reviewer/admin)
--------------------------------

Post the PR comment using GitHub CLI (optional):

```bash
gh pr comment 3 --body-file docs/pr_merge_instructions.md
```

Merge (via CLI if allowed):

```bash
gh pr merge 3 --merge
```

Or merge via the GitHub UI: verify required checks are green, then click **Merge pull request** on PR #3.

Post-merge verification (PowerShell)
----------------------------------

Run these locally or in CI to verify `main` after merge:

```powershell
git checkout main
git pull origin main
pnpm install
pnpm build
# Start production build on port 4000
$env:PORT=4000; pnpm start
# In a separate shell, run smoke/screenshots/a11y tests (adjust port if needed)
node scripts/playwright/smoke-test-pages.js http://localhost:4000/
node scripts/playwright/screenshot-test.js http://localhost:4000/
node scripts/playwright/a11y-test.js http://localhost:4000/
```

Artifacts
---------

When the post-merge run is complete the following folders will contain artifacts you can upload to the PR:

- `tmp_screenshots/` — PNG screenshots per page
- `tmp_a11y/` — axe-core JSON results per page

If you'd like, I can (after you merge): run the verification automatically and upload artifacts to the PR, or open a small follow-up PR to change branch-protection settings (only with explicit approval).

— Automation assistant
