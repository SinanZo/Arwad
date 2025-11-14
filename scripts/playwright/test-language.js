const { chromium } = require('playwright')

;(async () => {
  const url = process.argv[2] || 'http://localhost:4000/'
  console.log('Testing URL:', url)
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  // Set language preference before any script runs
  await page.addInitScript((lang) => {
    try {
      localStorage.setItem('language', lang)
    } catch (e) {
      // ignore
    }
  }, 'ar')

  try {
    await page.goto(url, { waitUntil: 'networkidle' })
  } catch (e) {
    console.error('Navigation failed:', e.message)
    await browser.close()
    process.exit(2)
  }

  // Wait up to 10s for client-side language to apply (document.lang or brand text)
  try {
    await page.waitForFunction(() => {
      try {
        if (document.documentElement.lang === 'ar') return true
        const el = document.querySelector('header span.font-bold.text-xl') || document.querySelector('.brand-short')
        const txt = el ? (el.textContent || '') : ''
        return /[\u0600-\u06FF]/.test(txt)
      } catch (e) {
        return false
      }
    }, { timeout: 10000 })
  } catch (e) {
    // timeout - continue to collect whatever state we have
  }

  const result = await page.evaluate(() => {
    const lang = document.documentElement.lang || null
    const dir = document.documentElement.dir || null
    const savedLang = (() => { try { return localStorage.getItem('language') } catch (e) { return null } })()
    // Prefer the brand span with the color class to avoid picking the logo 'A'
    const brandEl = document.querySelector('header span.text-primary-600') || document.querySelector('header a span.font-bold.text-xl:nth-of-type(2)') || document.querySelector('.brand-short') || null
    const brandText = brandEl ? brandEl.textContent.trim() : null
    return { lang, dir, savedLang, brandText }
  })

  console.log('RESULT:', JSON.stringify(result, null, 2))
  await browser.close()
  // Exit code 0 if arabic lang and dir rtl and brandText contains Arabic chars
  const ok = result.lang === 'ar' && result.dir === 'rtl' && /[\u0600-\u06FF]/.test(result.brandText || '')
  process.exit(ok ? 0 : 3)
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
