const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const base = process.argv[2] || 'http://localhost:4000/';
  const pages = ['/', '/about', '/our-services', '/products'];
  const outDir = path.join(process.cwd(), 'tmp_screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const results = [];
  for (const p of pages) {
    const url = new URL(p, base).toString();
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500); // let any animations settle
      const file = path.join(outDir, (p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_/, '')) + '.png');
      await page.screenshot({ path: file, fullPage: true });
      results.push({ path: p, url, ok: true, screenshot: file });
      console.log('Captured', file);
    } catch (err) {
      results.push({ path: p, url, ok: false, err: err.message });
      console.error('Failed', p, err.message);
    }
  }

  await browser.close();
  console.log(JSON.stringify({ results }, null, 2));
})();
