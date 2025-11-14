# ARWAD Trading (أرواد) Website - Project Overview

## Executive Summary

This is a modern, production-ready corporate website for ARWAD Trading (أرواد) built with Next.js 14, featuring:

- **Bilingual Support**: Full English/Arabic with automatic RTL layout
- **Theme Support**: Light/Dark mode with smooth transitions
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, structured data
- **Modular Architecture**: Reusable components, clean code structure
- **Type-Safe**: Full TypeScript implementation
- **Mock Backend**: API routes for forms (ready for real backend integration)

## Technology Stack

### Core Framework
- **Next.js 14.2+** - React framework with App Router
- **React 18.3+** - UI library
- **TypeScript 5.4+** - Type safety

### Styling
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **CSS Variables** - Theme customization
- **PostCSS** - CSS processing

### State Management
- **React Context** - Language, Auth, Theme state
- **next-themes** - Dark mode management
- **localStorage** - Client-side persistence

### Icons & UI
- **lucide-react** - Icon library
- **framer-motion** - Animations (optional)

## Key Features

### 1. Internationalization (i18n)

**Implementation:**
- Custom language context (`contexts/LanguageContext.tsx`)
- JSON translation files for EN/AR
- Automatic RTL layout switching
- Persistent language preference

**Usage:**
```tsx
const { t, language, setLanguage } = useLanguage()
<h1>{t('nav.home')}</h1>
```

### 2. Theme System

**Implementation:**
- next-themes for theme management
- CSS variables for colors
- Smooth transitions between themes
- Persistent theme preference

**Color Palette:**
- Primary: Deep blue (#0056e0) - Engineering/Industrial
- Accent: Strong red (#e60000) - CTAs and highlights
- Surfaces: Adapt based on light/dark mode

### 3. Responsive Navigation

**Features:**
- Sticky header with transparent backdrop
- Desktop: Horizontal menu
- Mobile: Hamburger menu with slide-in panel
- Language and theme toggles
- Active route highlighting

### 4. Component Library

**Reusable Components:**

1. **Cards:**
   - `ValueCard` - Core values with icons
   - `IndustryCard` - Industry sectors
   - `ServiceCard` - Service offerings
   - `ProductCard` - Product categories
   - `StatCard` - Statistics display
   - `InfoCard` - Contact information

2. **Layout:**
   - `Header` - Navigation and controls
   - `Footer` - Footer with links and info
   - `SectionTitle` - Consistent section headers

3. **Forms:**
   - `QuoteItemRow` - Dynamic quote items
   - Form inputs with validation
   - Success/error states

4. **Interactive:**
   - `HeroSlider` - Image/video carousel
   - Filter buttons
   - Dynamic tabs

### 5. Page Structure

**Home Page (`/`):**
- Hero slider with CTA
- About snapshot
- Key value pillars
- Industries grid
- Services overview
- Products highlights
- Contact CTA

**About Page (`/about`):**
- Company overview
- Six core values
- Vision & mission
- Key statistics
- Industry summary

**Industries Page (`/industries`):**
- Six industry sectors
- Detailed descriptions
- Equipment lists
- Service highlights

**Products Page (`/products`):**
- Category filtering
- Product grid
- Features section
- Custom request CTA

**Services Page (`/our-services`):**
- Four main services
- Detailed descriptions
- Deliverables lists
- Consultation CTA

**Contact Page (`/contact`):**
- Contact form
- Company information
- Map placeholder
- Working hours

**Register Page (`/register`):**
- Login/Register tabs
- Mock authentication
- Account management
- Password reset UI

**Quote Order Page (`/quote-order`):**
- Multi-step form
- Dynamic item rows
- Category selection
- Process explanation

### 6. API Routes

**Contact API (`/api/contact`):**
- Accepts form submissions
- Logs to console (mock)
- Returns success/error

**Quote API (`/api/quote`):**
- Accepts quote requests
- Validates data
- Generates reference number
- Logs to console (mock)

## Content Strategy

### Original Content

All content is **original and enhanced** compared to arwad.org:

- **Services**: Expanded descriptions with deliverables
- **Industries**: Detailed equipment and support lists
- **Products**: Comprehensive category breakdowns
- **Values**: Extended from 3 to 6 core principles
- **Statistics**: Realistic but fictional numbers

### Placeholder Assets

Image paths are structured but not populated:
```
/images/home/hero-1.jpg
/images/industries/water.jpg
/images/products/ventilators.jpg
```

**To add images:**
1. Place files in `public/images/`
2. Maintain naming convention
3. Recommended formats: JPG (photos), PNG (graphics), WebP (optimized)
4. Recommended sizes: Hero (1920x1080), Cards (800x600)

## SEO Implementation

### Meta Tags

Each page includes:
- Title (unique per page)
- Description
- Keywords
- Open Graph tags
- Canonical URLs

**Example:**
```tsx
export const metadata: Metadata = {
  title: 'About ARWAD | MRO Solutions',
  description: '...',
  openGraph: { ... }
}
```

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Section tags for content blocks
- Nav, header, footer, main tags
- Article tags for content

### Performance

- Code splitting (automatic)
- Image optimization (when using next/image)
- CSS purging in production
- Tree-shaking unused code

## Authentication System

**Current Implementation:**
- Mock authentication
- localStorage persistence
- Login/Register forms
- Account management UI

**For Production:**
1. Replace with NextAuth.js or similar
2. Add backend API
3. Implement proper password hashing
4. Add session management
5. Implement JWT or session tokens

## Form Handling

**Current Implementation:**
- Client-side validation
- API route logging
- Success/error feedback

**For Production:**
1. Add server-side validation
2. Integrate email service (SendGrid, AWS SES)
3. Add database storage
4. Implement rate limiting
5. Add CAPTCHA for spam prevention

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Focus states on all interactive elements

## Browser Compatibility

**Tested/Supported:**
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Mobile 90+

## Future Enhancements

### Phase 2 Features:
1. **Search Functionality**
   - Global site search
   - Product/service filtering
   - Industry search

2. **Blog/News Section**
   - Industry updates
   - Case studies
   - Technical articles

3. **Client Portal**
   - Order tracking
   - Invoice management
   - Document repository

4. **Advanced Features**
   - Live chat integration
   - PDF quote generation
   - Multi-currency support
   - Advanced analytics

### Technical Improvements:
1. **Real Backend Integration**
   - Database (PostgreSQL/MongoDB)
   - Real authentication
   - Email service
   - File uploads

2. **CMS Integration**
   - Contentful/Sanity for content
   - Admin dashboard
   - Dynamic content management

3. **Advanced SEO**
   - Sitemap generation
   - Robots.txt
   - Structured data (JSON-LD)
   - Rich snippets

4. **Performance**
   - Image CDN integration
   - Advanced caching
   - Service workers
   - Progressive Web App (PWA)

## Maintenance

### Regular Updates:
- Update dependencies monthly
- Security patches immediately
- Content updates as needed
- Image optimization ongoing

### Monitoring:
- Analytics setup (Google Analytics/Plausible)
- Error tracking (Sentry)
- Performance monitoring (Lighthouse)
- User feedback collection

## Development Workflow

### Local Development:
```powershell
npm install
npm run dev
```

### Adding New Pages:
1. Create folder in `app/`
2. Add `page.tsx`
3. Update navigation in `Header.tsx`
4. Add translations in `locales/`

### Adding New Components:
1. Create in `components/`
2. Use TypeScript
3. Follow naming convention
4. Make responsive
5. Support RTL layout

### Testing:
- Manual testing in all browsers
- Test both light/dark modes
- Test EN/AR languages
- Test mobile/tablet/desktop
- Test form submissions

## Deployment

### Vercel (Recommended):
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

### Environment Variables:
None required for basic setup.

For production with real backend:
```env
DATABASE_URL=
EMAIL_API_KEY=
AUTH_SECRET=
```

## Contact

**Development Team**: Powered by Jawareer
**Project Lead**: Technical Architecture
**Timeline**: Q4 2024 - Q1 2025

---

**Last Updated**: November 2024
**Version**: 1.0.0
