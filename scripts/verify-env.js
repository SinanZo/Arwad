/*
 Verifies presence of recommended env vars for branding/contact/social.
 Usage: node scripts/verify-env.js
*/

const keys = {
  required: [
    'NEXT_PUBLIC_BRAND_LOGO_LIGHT',
    'NEXT_PUBLIC_BRAND_LOGO_DARK',
    'NEXT_PUBLIC_BRAND_OG_IMAGE',
    'NEXT_PUBLIC_BRAND_ICON',
    'NEXT_PUBLIC_SITE_URL',
  ],
  recommended: [
    'NEXT_PUBLIC_SITE_EMAIL',
    'NEXT_PUBLIC_SITE_PHONE',
    'NEXT_PUBLIC_SOCIAL_TWITTER',
    'NEXT_PUBLIC_SOCIAL_LINKEDIN',
    'NEXT_PUBLIC_SOCIAL_INSTAGRAM',
    'NEXT_PUBLIC_BRAND_HERO_VIDEO',
    'NEXT_PUBLIC_BRAND_HERO_POSTER',
  ],
}

function present(name) {
  const v = process.env[name]
  return typeof v === 'string' && v.trim().length > 0
}

const pad = (s, n) => (s + ' '.repeat(n)).slice(0, n)

let missingRequired = []
let missingRecommended = []

console.log('Env verification:')
for (const k of keys.required) {
  const ok = present(k)
  if (!ok) missingRequired.push(k)
  console.log(`- ${pad(k, 34)} : ${ok ? 'SET' : 'MISSING'}`)
}
for (const k of keys.recommended) {
  const ok = present(k)
  if (!ok) missingRecommended.push(k)
  console.log(`- ${pad(k, 34)} : ${ok ? 'SET' : 'MISSING'}`)
}

if (missingRequired.length) {
  console.warn('\nMissing required envs for full branding:')
  for (const k of missingRequired) console.warn(`- ${k}`)
  console.warn('\nAdd them to .env.local or hosting provider env vars.')
}

if (missingRecommended.length) {
  console.warn('\nRecommended envs not set (optional):')
  for (const k of missingRecommended) console.warn(`- ${k}`)
}

// Do not fail the process; this is advisory.
process.exit(0)
