const { chromium } = require('playwright')

;(async () => {
  const base = process.argv[2] || 'http://localhost:4000/'
  const pages = ['/', '/about', '/our-services', '/products', '/contact']
  console.log('Smoke test base URL:', base)

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

  const results = []

  for (const p of pages) {
    const url = new URL(p, base).toString()
    let ok = false
    let lang = null
    let dir = null
    let brand = null
    let imgCount = 0
    let bgCountRes = 0
    let inlineSvgCount = 0
    let err = null

    try {
      await page.goto(url, { waitUntil: 'networkidle' })
      // allow hydration
      await page.waitForTimeout(800)

      try {
        await page.waitForFunction(() => {
          try {
            if (document.documentElement.lang === 'ar') return true
            const el = document.querySelector('header span.text-primary-600') || document.querySelector('header a span.font-bold.text-xl:nth-of-type(2)') || document.querySelector('.brand-short')
            const txt = el ? (el.textContent || '') : ''
            return /[\u0600-\u06FF]/.test(txt)
          } catch (e) {
            return false
          }
        }, { timeout: 5000 })
      } catch (e) {
        // ignore timeout
      }

      const res = await page.evaluate(() => {
        const lang = document.documentElement.lang || null
        const dir = document.documentElement.dir || null
        const brandEl = document.querySelector('header span.text-primary-600') || document.querySelector('header a span.font-bold.text-xl:nth-of-type(2)') || document.querySelector('.brand-short')
        const brand = brandEl ? brandEl.textContent.trim() : null
        const images = Array.from(document.querySelectorAll('img')).map(i => i.src)
        // Count elements with a computed background-image (not 'none')
        const bgCount = (() => {
          try {
            const els = Array.from(document.querySelectorAll('*'))
            return els.filter(e => {
              try {
                const s = window.getComputedStyle(e)
                return s && s.backgroundImage && s.backgroundImage !== 'none'
              } catch (ee) {
                return false
              }
            }).length
          } catch (e) { return 0 }
        })()
        const inlineSvgCount = document.querySelectorAll('svg').length
        return { lang, dir, brand, images, bgCount, inlineSvgCount }
      })

      lang = res.lang
      dir = res.dir
      brand = res.brand
      imgCount = Array.isArray(res.images) ? res.images.length : 0
      bgCountRes = typeof res.bgCount === 'number' ? res.bgCount : 0
      inlineSvgCount = typeof res.inlineSvgCount === 'number' ? res.inlineSvgCount : 0
      ok = lang === 'ar' && dir === 'rtl' && /[\u0600-\u06FF]/.test(brand || '')
    } catch (e) {
      err = e && e.message ? e.message : String(e)
    }

    results.push({ path: p, url, ok, lang, dir, brand, imgCount, bgCount: bgCountRes, inlineSvgCount, err })
  }

  await browser.close()
  const out = { results }
  console.log(JSON.stringify(out, null, 2))

  const allOk = results.every(r => r.ok)
  process.exit(allOk ? 0 : 3)
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
