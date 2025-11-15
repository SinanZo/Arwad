# Branding Configuration

Centralize brand assets via environment variables, with safe fallbacks to local placeholders.

## Environment Variables

Set these in `.env.local` (or hosting provider dashboard). All are optional.

- `NEXT_PUBLIC_BRAND_LOGO_LIGHT`: Absolute or public path to light logo (SVG/PNG/WebP)
- `NEXT_PUBLIC_BRAND_LOGO_DARK`: Absolute or public path to dark logo
- `NEXT_PUBLIC_BRAND_OG_IMAGE`: Absolute or public path used for Open Graph/social cards
- `NEXT_PUBLIC_BRAND_ICON`: Absolute or public path for favicon/app icon
- `NEXT_PUBLIC_BRAND_HERO_VIDEO`: Absolute URL to hero MP4 (optional)
- `NEXT_PUBLIC_BRAND_HERO_POSTER`: Poster image for hero when video not used

Examples:

```
NEXT_PUBLIC_BRAND_LOGO_LIGHT=https://www.arwad.org/assets/brand/logo-light.svg
NEXT_PUBLIC_BRAND_LOGO_DARK=https://www.arwad.org/assets/brand/logo-dark.svg
NEXT_PUBLIC_BRAND_OG_IMAGE=https://www.arwad.org/assets/og/cover.png
NEXT_PUBLIC_BRAND_ICON=https://www.arwad.org/assets/brand/favicon.svg
NEXT_PUBLIC_BRAND_HERO_VIDEO=https://cdn.example.com/hero.mp4
NEXT_PUBLIC_BRAND_HERO_POSTER=https://cdn.example.com/hero-poster.webp
```

## Contact & Social

Public contact info and social links can be set via env vars:

```
NEXT_PUBLIC_SITE_EMAIL=info@arwad.org
NEXT_PUBLIC_SITE_PHONE=+971 4 123 4567
NEXT_PUBLIC_SITE_ADDRESS=Business Bay, Dubai, UAE

NEXT_PUBLIC_SOCIAL_FACEBOOK=https://facebook.com/yourpage
NEXT_PUBLIC_SOCIAL_TWITTER=https://x.com/yourhandle
NEXT_PUBLIC_SOCIAL_LINKEDIN=https://linkedin.com/company/yourcompany
NEXT_PUBLIC_SOCIAL_INSTAGRAM=https://instagram.com/yourbrand
NEXT_PUBLIC_SOCIAL_YOUTUBE=https://youtube.com/@yourchannel
```

Footer will automatically render these links when provided.

## Remote Images

`next.config.js` allows common remote domains, including `arwad.org`. If you host assets elsewhere, add the domain there as needed.

```js
images: {
  domains: ['localhost', 'arwad.org', 'www.arwad.org', 'res.cloudinary.com', 'images.unsplash.com'],
  unoptimized: true,
}
```

## Usage in Code

`config/brand.ts` reads the env vars and falls back to `/public/images/...` placeholders if unset.

No code changes are required to swap assets—just set the env vars.
