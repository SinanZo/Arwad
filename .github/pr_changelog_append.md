## Changelog (since PR opened)

- Replaced remaining `<img>` with `next/image` + added shimmer blur placeholders for better LCP
- Header: theme-aware logo with `next/image` and blur
- Footer: theme-aware logo, dynamic contact info, and social links via env-config
- Brand config: assets become env-driven (`NEXT_PUBLIC_BRAND_*`) with documented fallbacks
- Social metadata: Twitter card added; Open Graph already wired to brand OG image
- SEO: Added `app/sitemap.ts`, `app/robots.ts`, `metadataBase`, and canonical URL
- Error UX: Added localized `app/not-found.tsx` and a global `app/error.tsx` with retry
- Docs: `.env.example` and `docs/BRANDING.md` updated for assets + contact/social
- CI: GitHub Actions workflow builds PRs and main
