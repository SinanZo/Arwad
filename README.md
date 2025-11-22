# ARWAD Trading - Corporate Website

Modern, production-ready corporate website for ARWAD Trading, a regional MRO (Maintenance, Repair, and Operations), spare parts, and supply chain management company serving industrial and infrastructure sectors.

## Features

### Core Functionality
- ✅ **Bilingual Support**: Full English/Arabic translations with RTL layout support
- ✅ **Light/Dark Mode**: Theme toggle with industrial color palette (deep blue & red)
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- ✅ **Modern Stack**: React 19, TypeScript, Tailwind CSS 4, shadcn/ui

### Pages
1. **Home** (`/`) - Hero slider, about snapshot, core values, industries, services, products
2. **About** (`/about`) - Company overview, values, vision/mission, statistics
3. **Industries** (`/industries`) - 6 industry sectors with detailed descriptions
4. **Products** (`/products`) - 8 product categories with filterable tabs
5. **Our Services** (`/our-services`) - 4 detailed service offerings
6. **Contact** (`/contact`) - Contact form and company information
7. **Register** (`/register`) - Login/signup with mock authentication
8. **Quote Order** (`/quote-order`) - Dynamic RFQ form with multiple items

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS 4 with OKLCH color format
- **UI Components**: shadcn/ui
- **Internationalization**: i18next, react-i18next
- **Animations**: Framer Motion
- **Build Tool**: Vite 7

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
client/
├── public/
│   └── images/          # Placeholder image paths
│       ├── home/
│       ├── about/
│       ├── industries/
│       ├── products/
│       ├── services/
│       ├── contact/
│       └── quote/
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Cards.tsx   # Card components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Footer.tsx  # Site footer
│   │   ├── Layout.tsx  # Page layout wrapper
│   │   ├── HeroSlider.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── QuoteItemRow.tsx
│   │   └── SEO.tsx     # SEO meta tags
│   ├── contexts/       # React contexts
│   │   ├── ThemeContext.tsx
│   │   └── I18nContext.tsx
│   ├── locales/        # Translation files
│   │   ├── en/
│   │   │   └── common.json
│   │   └── ar/
│   │       └── common.json
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Industries.tsx
│   │   ├── Products.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Register.tsx
│   │   └── QuoteOrder.tsx
│   ├── lib/            # Utilities
│   │   └── i18n.ts
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles & theme
```

## Customization

### Replacing Placeholder Images

All images are referenced with placeholder paths. Replace them with actual images:

1. Add your images to `client/public/images/` following the directory structure
2. Ensure images are high-resolution (recommended 1920×1080 for hero images)
3. Use appropriate aspect ratios:
   - Hero images: 16:9 landscape
   - Industry/Product cards: Square or 16:9
   - About images: 16:9

Example paths to replace:
- `/images/home/hero-1.jpg` - Main hero image/video
- `/images/industries/water.jpg` - Water & Desalination
- `/images/products/ventilation.jpg` - Ventilation products
- etc.

### Updating Logo

The logo is controlled via the `APP_LOGO` constant in `client/src/const.ts`:

```typescript
export const APP_LOGO = '/logo.png'; // Update this path
export const APP_TITLE = 'ARWAD Trading';
```

**Note**: After changing the logo in code, users must update the favicon separately via the Management Dashboard if they want the favicon to match.

### Color Customization

The industrial color palette is defined in `client/src/index.css`:

- **Primary**: Deep engineering blue (OKLCH format)
- **Secondary**: Strong red for CTAs
- **Background**: Light grey (light mode) / Dark charcoal (dark mode)

Modify the CSS variables in `:root` and `.dark` sections to change colors.

### Translations

Add or modify translations in:
- `client/src/locales/en/common.json` - English
- `client/src/locales/ar/common.json` - Arabic

The i18n system automatically handles RTL layout for Arabic.

## Features in Detail

### Internationalization (i18n)

- Language switcher in header toggles between English and Arabic
- RTL layout automatically applied for Arabic
- All text content translated
- Language preference saved to localStorage

### Theme System

- Light/Dark mode toggle in header
- Industrial color palette optimized for both modes
- Theme preference saved to localStorage
- Smooth transitions between themes

### Forms

All forms include:
- Client-side validation
- Success/error toast notifications
- Mock submission (console.log)
- Form reset after submission

**Contact Form**: Name, email, phone, company, subject, message
**Quote Form**: Company info + dynamic item rows (part number, description, manufacturer, quantity, category)
**Register/Login**: Mock authentication stored in localStorage

### Mock Authentication

The Register page includes a simple mock authentication system:
- Login/Signup tabs
- User data stored in localStorage
- Account management page when logged in
- No real backend required

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All content is original and does not copy from arwad.org
- Forms are front-end only with mock submissions
- Authentication is mock-only (localStorage)
- Images are placeholders - replace with actual assets
- No real backend or database required
- All routes are client-side (SPA)

## License

© 2024 ARWAD Trading. All rights reserved.
Powered by Jawareer.

## Support

For questions or support, please contact the development team.
