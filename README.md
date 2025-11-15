# ARWAD Trading — Next.js App Router Starter

This project is a minimal corporate website scaffold using Next.js 14 (App Router), TypeScript and TailwindCSS with `next-themes` and bilingual EN/AR support (RTL).

Run locally:

```powershell
npm install
npm run dev
```

Pages included:
- Home, About, Industries, Products, Our Services, Contact, Register, Quote Order

API routes (mock):
- `POST /api/contact` — receives contact form
- `POST /api/quote` — receives RFQ
# ARWAD Trading (أرواد) - Corporate Website

A modern, fully-featured Next.js application for ARWAD Trading (أرواد), showcasing MRO solutions, spare parts, and supply chain management services.

## Features

- ✅ **Next.js 14+** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Light/Dark Mode** with smooth transitions
- ✅ **English/Arabic** support with RTL layout
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **SEO Optimized** with metadata
- ✅ **Reusable Components** architecture
- ✅ **Mock Authentication** system
- ✅ **Contact & Quote Forms** with API routes

## Project Structure

```
New Arwad/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── quote/
│   │       └── route.ts
│   ├── contact/
│   │   └── page.tsx
│   ├── industries/
│   │   └── page.tsx
│   ├── our-services/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── quote-order/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (Home)
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSlider.tsx
│   ├── InfoCard.tsx
│   ├── IndustryCard.tsx
│   ├── ProductCard.tsx
│   ├── QuoteItemRow.tsx
│   ├── SectionTitle.tsx
│   ├── ServiceCard.tsx
│   ├── StatCard.tsx
│   ├── ThemeProvider.tsx
│   └── ValueCard.tsx
├── contexts/
│   ├── AuthContext.tsx
│   └── LanguageContext.tsx
├── locales/
│   ├── en/
│   │   └── common.json
│   └── ar/
│       └── common.json
├── public/
│   └── images/ (placeholder paths)
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

```powershell
npm install
```

Or with yarn:

```powershell
yarn install
```

Or with pnpm:

```powershell
pnpm install
```

### Development

2. **Run the development server:**

```powershell
npm run dev
```

Or:

```powershell
yarn dev
```

Or:

```powershell
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically reload when you make changes to the code.

### Building for Production

4. **Build the application:**

```powershell
npm run build
```

5. **Start the production server:**

```powershell
npm run start
```

## Environment Setup

No environment variables are required for the basic setup. The application runs entirely on the frontend with mock data for authentication and form submissions.

For production deployment, you would typically add:

- Database connection strings
- Email service API keys (for contact forms)
- Authentication service credentials
- CDN URLs for images

## Key Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, industries overview |
| `/about` | About ARWAD (أرواد) - vision, mission, values |
| `/industries` | Detailed industry sectors served |
| `/products` | Product catalog with filtering |
| `/our-services` | Service offerings and capabilities |
| `/contact` | Contact form and information |
| `/register` | Login/Register and account management |
| `/quote-order` | Request for quote form |

## Internationalization (i18n)

The application supports English and Arabic with automatic RTL layout switching.

**To add translations:**

1. Edit `locales/en/common.json` for English
2. Edit `locales/ar/common.json` for Arabic
3. Use the `t()` function from `useLanguage()` hook in components

Example:
```tsx
const { t } = useLanguage()
return <h1>{t('hero.title')}</h1>
```

## Theme System

Light/Dark mode is managed by `next-themes` with CSS variables defined in `app/globals.css`.

**Color scheme:**
- Primary: Engineering blue (#0056e0)
- Accent: Strong red (#e60000)
- Backgrounds and surfaces adapt based on theme

## Responsive Design

All components are built mobile-first with breakpoints:
- Mobile: default (< 768px)
- Tablet: md (768px+)
- Desktop: lg (1024px+)

## Image Assets

All image paths are placeholders. To add real images:

1. Place images in `public/images/` directory
2. Organize by section: `home/`, `industries/`, `products/`, etc.
3. Update image paths in components

Example structure:
```
public/
  images/
    home/
      hero-industrial-1.jpg
      hero-industrial-2.jpg
    industries/
      water.jpg
      power.jpg
      manufacturing.jpg
    products/
      ventilators.jpg
      inspection.jpg
```

## Form Handling

Contact and quote forms submit to API routes:
- `/api/contact` - Contact form submissions
- `/api/quote` - Quote request submissions

Currently, these log to console. For production:

1. Add email service integration (SendGrid, AWS SES, etc.)
2. Add database storage (PostgreSQL, MongoDB, etc.)
3. Add validation middleware
4. Implement rate limiting

## Authentication

The authentication system is **mock only** for demonstration purposes:
- Uses localStorage for session persistence
- No real password hashing or validation
- For production, integrate a proper auth service (NextAuth.js, Auth0, Firebase Auth, etc.)

## Customization

### Branding

Update logo and brand colors in:
- `components/Header.tsx` - Logo component
- `components/Footer.tsx` - Footer logo
- `app/globals.css` - CSS color variables
- `tailwind.config.ts` - Tailwind color palette

### Content

All text content is managed through:
- Translation files in `locales/`
- Page components in `app/*/page.tsx`

### Styling

Global styles: `app/globals.css`
### Branding

Centralize brand assets via `config/brand.ts` using environment variables.

- Public env vars (set in `.env.local` or hosting):
  - `NEXT_PUBLIC_BRAND_LOGO_LIGHT`
  - `NEXT_PUBLIC_BRAND_LOGO_DARK`
  - `NEXT_PUBLIC_BRAND_OG_IMAGE`
  - `NEXT_PUBLIC_BRAND_ICON`
  - `NEXT_PUBLIC_BRAND_HERO_VIDEO` (optional)
  - `NEXT_PUBLIC_BRAND_HERO_POSTER`

If unset, the app falls back to placeholders in `/public/images`.

Also see `docs/BRANDING.md` for examples and domain configuration.
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
All image paths are placeholders by default. To add real images:
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO & Deployment

- Open Graph and Twitter metadata use brand assets
- `app/sitemap.ts` and `app/robots.ts` are included
- Canonical URL and `metadataBase` set to `https://arwad.org`
## Performance

- Automatic code splitting
- Image optimization (when using next/image)
- CSS optimization in production
- Tree-shaking unused code

## Deployment

### Vercel (Recommended)

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the application and deploy the `.next` folder:

```powershell
npm run build
```

Compatible with:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting

## Support & Development

**Powered by Jawareer**

For questions or support, contact the development team.

## License

© 2024 ARWAD Trading (أرواد). All rights reserved.

## Smoke tests & Troubleshooting

- **Run smoke tests (wrapper):** the wrapper waits for the dev server and writes UTF-8 output to `tmp_smoke_out.txt`.

```powershell
powershell -File .\scripts\playwright\run-smoke-with-wait.ps1 http://localhost:4000/ 60
```

- **If you see garbled Arabic (mojibake)**: open `tmp_smoke_out.txt` in a UTF-8-aware editor (VS Code, Notepad++). The wrapper writes UTF-8 but some consoles may render Arabic incorrectly.

- **Locked log files / Node processes:** if `git` operations fail because files are locked (e.g. `next_dev.log`), terminate the Node process or reboot. To inspect/kill a process in an elevated PowerShell (replace PID):

```powershell
Get-CimInstance Win32_Process -Filter "ProcessId=114776" | Select-Object ProcessId,ParentProcessId,CommandLine,ExecutablePath
Stop-Process -Id 114776 -Force
taskkill /PID 114776 /F
```

Rebooting also clears locked processes if you prefer not to run as Administrator.

