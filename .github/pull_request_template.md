## Summary

- Centralize brand assets in `config/brand.ts` (light/dark logos, hero video/poster, OG image, favicon) and helper `getActiveLogo`.
- Fix language toggle to show target language; complete EN/AR translations and safer array access in translations.
- Refactor header to use `next/image` for theme-aware logos; polish language/theme controls.
- Enhance home with hero slider (image/video), gradients, CTAs, stats, and trust banners.
- Visual polish across Industries, Services, Products, About, Register, Quote pages with imagery, hover effects, and improved forms/accessibility.
- Update metadata to use brand config for Open Graph and icon.
- Replace all remaining `<img>` with `next/image` and add blur placeholders for better LCP.

## Notable Files

- `config/brand.ts` (brand assets + `getActiveLogo`)
- `components/Header.tsx` (dynamic, theme-aware logo)
- `components/HeroSlider.tsx`, `components/HomeClient.tsx` (media support)
- `components/*Card.tsx` (image + interactions)
- `app/*/page.tsx` sections updated with optimized images
- `lib/blur.ts` (shared blurDataURL shimmer)

## Testing

- `pnpm build` succeeds; no `<img>` lint warnings remain.
- `pnpm dev` serves and compiles locally (Next.js 14.2.33).

## Follow-ups

- Replace placeholders in `config/brand.ts` with official assets:
  - `logoLight`, `logoDark`, `ogImage`, optional `heroVideo`.
- Optionally add custom blurDataURL per image if desired.

## Screenshots

// Add before/after screenshots if available.
