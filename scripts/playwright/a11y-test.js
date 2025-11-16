const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const base = process.argv[2] || 'http://localhost:4000/';
  const pages = ['/', '/about', '/our-services', '/products', '/contact'];
  const outDir = path.join(process.cwd(), 'tmp_a11y');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Resolve axe-core script from node_modules
  let axePath;
  try {
    axePath = require.resolve('axe-core/axe.min.js');
  } catch (e) {
    console.error('axe-core not installed. Run `pnpm install` or `npm install`');
    process.exit(1);
  }
  const axeSrc = fs.readFileSync(axePath, 'utf8');

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const results = [];
  for (const p of pages) {
    const url = new URL(p, base).toString();
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      // inject axe
      await page.addScriptTag({ content: axeSrc });
      const res = await page.evaluate(async () => {
        return await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } });
      });
      const file = path.join(outDir, (p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_/, '')) + '.json');
      fs.writeFileSync(file, JSON.stringify(res, null, 2), 'utf8');
      const violations = res.violations ? res.violations.length : 0;
      results.push({ path: p, url, ok: violations === 0, violations, file });
      console.log(`Page ${p} — violations: ${violations}`);
    } catch (err) {
      results.push({ path: p, url, ok: false, err: err.message });
      console.error('Failed', p, err.message);
    }
  }

  await browser.close();
  console.log(JSON.stringify({ results }, null, 2));
})();
