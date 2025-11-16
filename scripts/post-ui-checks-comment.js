/*
 Summarize UI check outputs and optionally post a PR comment.
 Reads: tmp_run_smoke.json, tmp_run_a11y.json, tmp_verify_meta.json, tmp_run_screenshots.json, tmp_a11y/*.json
 Environment (when on PR):
   GITHUB_TOKEN, GITHUB_REPOSITORY (owner/repo), PR_NUMBER
*/
const fs = require('fs');
const path = require('path');
const https = require('https');

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

const smoke = readJson('tmp_run_smoke.json');
const a11y = readJson('tmp_run_a11y.json');
const meta = readJson('tmp_verify_meta.json');
const shots = readJson('tmp_run_screenshots.json');

// Collect per-page a11y detailed violation counts from tmp_a11y directory
let a11yPageDetails = [];
if (fs.existsSync('tmp_a11y')) {
  for (const f of fs.readdirSync('tmp_a11y')) {
    if (!f.endsWith('.json')) continue;
    const full = path.join('tmp_a11y', f);
    try {
      const j = JSON.parse(fs.readFileSync(full, 'utf8'));
      const violations = Array.isArray(j.violations) ? j.violations.length : 0;
      a11yPageDetails.push({ file: f, violations });
    } catch {}
  }
}

const smokeResults = smoke && smoke.results ? smoke.results : [];
const smokeOk = smokeResults.length && smokeResults.every(r => r.ok === true);
const metaOk = meta && meta.allOk === true;
const a11yResults = a11y && a11y.results ? a11y.results : [];
// Determine a11y pass: all pages ok
const a11yOk = a11yResults.length && a11yResults.every(r => r.ok === true);
const screenshotCount = fs.existsSync('tmp_screenshots') ? fs.readdirSync('tmp_screenshots').length : 0;

// Build markdown summary
let md = '### UI Checks Detailed Summary\n\n';
md += `- Smoke: ${smokeOk ? 'pass' : 'warn'} (pages: ${smokeResults.length})\n`;
md += `- Meta: ${metaOk ? 'pass' : 'fail'}\n`;
md += `- A11y: ${a11yOk ? 'pass' : 'fail'} (pages: ${a11yResults.length})\n`;
md += `- Screenshots: ${screenshotCount} files\n`;

if (smokeResults.length) {
  md += '\n#### Smoke Pages\n';
  for (const r of smokeResults) {
    md += `- ${r.path} → lang=${r.lang || 'n/a'} dir=${r.dir || 'n/a'} ${r.ok ? '✓' : '✗'}${r.err ? ` (err: ${r.err})` : ''}\n`;
  }
}

if (a11yResults.length) {
  md += '\n#### Accessibility (violations per page)\n';
  for (const r of a11yResults) {
    md += `- ${r.path} → violations=${r.violations}${r.ok ? ' ✓' : ' ✗'}\n`;
  }
}

if (a11yPageDetails.length) {
  md += '\n#### Raw A11y Files\n';
  for (const d of a11yPageDetails) {
    md += `- ${d.file}: violations=${d.violations}\n`;
  }
}

// Overall status line (can be used to gate merge in future)
const overallOk = smokeOk && metaOk && a11yOk;
md += `\n**Overall:** ${overallOk ? 'PASS' : 'ATTENTION NEEDED'}\n`;

console.log(md);

// Append to GitHub Step Summary if available
const ghSummaryPath = process.env.GITHUB_STEP_SUMMARY;
if (ghSummaryPath) {
  try { fs.appendFileSync(ghSummaryPath, '\n' + md + '\n', 'utf8'); } catch {}
}

// Post PR comment if in a PR context
const token = process.env.GITHUB_TOKEN;
const repo = process.env.GITHUB_REPOSITORY; // owner/repo
const prNumber = process.env.PR_NUMBER;

if (token && repo && prNumber) {
  const [owner, repoName] = repo.split('/');
  const body = { body: md };
  const data = JSON.stringify(body);
  const opts = {
    hostname: 'api.github.com',
    path: `/repos/${owner}/${repoName}/issues/${prNumber}/comments`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'ui-checks-bot',
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };
  const req = https.request(opts, res => {
    let buf = '';
    res.on('data', c => buf += c);
    res.on('end', () => {
      console.log('Posted PR comment status:', res.statusCode);
      if (res.statusCode >= 300) {
        console.error('Failed to post comment:', buf);
        process.exitCode = 0; // don't fail build
      }
    });
  });
  req.on('error', err => {
    console.error('Error posting PR comment:', err.message);
  });
  req.write(data);
  req.end();
}

// Exit 0 always (summary only)
process.exit(0);
