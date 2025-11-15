/*
 Verify Open Graph, Twitter, and canonical meta tags across key pages.
 Usage: node scripts/verify-meta.js http://localhost:4000/
 Outputs JSON summary to stdout.
*/

const base = process.argv[2] || 'http://localhost:4000/'
const pages = ['/', '/about', '/our-services', '/products', '/contact']

function extractMeta(html) {
  const get = (prop, attr = 'property') => {
    const r = new RegExp(`<meta[^>]+${attr}=["']${prop}["'][^>]*>`, 'i')
    const m = html.match(r)
    if (!m) return null
    const contentMatch = m[0].match(/content=["']([^"']+)["']/i)
    return contentMatch ? contentMatch[1] : null
  }
  const getName = (name) => get(name, 'name')
  const linkCanon = (() => {
    const r = /<link[^>]+rel=["']canonical["'][^>]*>/i
    const m = html.match(r)
    if (!m) return null
    const hrefMatch = m[0].match(/href=["']([^"']+)["']/i)
    return hrefMatch ? hrefMatch[1] : null
  })()
  return {
    ogTitle: get('og:title'),
    ogDesc: get('og:description'),
    ogImage: get('og:image'),
    twitterCard: getName('twitter:card'),
    twitterTitle: getName('twitter:title'),
    twitterDesc: getName('twitter:description'),
    canonical: linkCanon,
  }
}

async function main() {
  const results = []
  for (const p of pages) {
    const url = new URL(p, base).toString()
    try {
      const res = await fetch(url)
      const html = await res.text()
      const meta = extractMeta(html)
      const ok = !!(meta.ogTitle && meta.ogDesc && meta.ogImage && meta.twitterCard && meta.canonical)
      results.push({ path: p, url, ok, meta })
    } catch (err) {
      results.push({ path: p, url, ok: false, error: err.message })
    }
  }
  const allOk = results.every(r => r.ok)
  console.log(JSON.stringify({ base, results, allOk }, null, 2))
  process.exit(allOk ? 0 : 2)
}

main().catch(e => { console.error(e); process.exit(1) })
