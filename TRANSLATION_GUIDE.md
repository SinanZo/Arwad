# ARWAD Trading - Translation & Content Guide

## Overview

This project includes comprehensive bilingual support (English/Arabic) with full RTL layout support for Arabic. All UI text, forms, navigation, and content pages are fully translated.

## Translation Architecture

### Directory Structure
```
locales/
├── en/
│   └── common.json      (450+ English translation keys)
└── ar/
    └── common.json      (450+ Arabic translation keys)
```

### How Translations Work

The application uses a React Context-based i18n system:

1. **LanguageContext** (`contexts/LanguageContext.tsx`)
   - Manages current language state (en/ar)
   - Loads translation JSON files dynamically
   - Provides `useLanguage()` hook with `t()` translation function
   - Updates `document.dir` and `document.lang` for RTL/LTR switching
   - Persists user preference to localStorage

2. **Usage in Components**
   ```tsx
   const { t } = useLanguage();
   
   return <h1>{t('hero.title')}</h1>;
   ```

## Translation Keys Structure

### Navigation
- `nav.home` - Home page link
- `nav.about` - About page link
- `nav.industries` - Industries page link
- `nav.products` - Products page link
- `nav.services` - Services page link
- `nav.contact` - Contact page link
- `nav.register` - Register/Auth page link
- `nav.quote` - Request quote link
- `nav.login` - Login button
- `nav.logout` - Logout button
- `nav.account` - Account menu

### Hero Section
- `hero.title` - Main headline
- `hero.subtitle` - Subheading
- `hero.cta_quote` - Call-to-action for quote
- `hero.cta_industries` - Call-to-action for industries
- `hero.slide_one.title` / `hero.slide_one.description`
- `hero.slide_two.title` / `hero.slide_two.description`
- `hero.slide_three.title` / `hero.slide_three.description`

### About Page
- `about.title` - Page title
- `about.subtitle` - Page subtitle
- `about.description` - Main description
- `about.overview` - Company overview
- `about.vision_title` / `about.vision_text`
- `about.mission_title` / `about.mission_text`
- `about.why_choose` - Section title
- `about.expertise`, `about.network`, `about.innovation`, etc.

### Values Section
- `values.title` - Section title
- `values.subtitle` - Section subtitle
- `values.ownership.title` / `values.ownership.description`
- `values.availability.title` / `values.availability.description`
- `values.reliability.title` / `values.reliability.description`
- `values.competence.title` / `values.competence.description`
- `values.knowledge.title` / `values.knowledge.description`
- `values.integrity.title` / `values.integrity.description`

### Industries Section
- `industries.title` - Section title
- `industries.subtitle` - Section subtitle
- `industries.description` - Section description
- `industries.water.title` / `industries.water.description` / `industries.water.details`
- `industries.water.supplies` - Array of supply items
- (Same structure for: power, manufacturing, petrochemical, mining, infrastructure)

### Services Section
- `services.title` - Section title
- `services.subtitle` - Section subtitle
- `services.description` - Section description
- `services.procurement.title` / `services.procurement.description` / `services.procurement.features`
- `services.customized.*` - Customized solutions
- `services.automation.*` - Automation & control
- `services.assessment.*` - Process assessment
- `services.technical.*` - Technical support
- `services.logistics.*` - Logistics services

### Products Section
- `products.title` - Section title
- `products.subtitle` - Section subtitle
- `products.description` - Section description
- `products.ventilators.title` / `products.ventilators.description`
- (Same structure for: inspection, spare_parts, cooling, desalination, heavy, measurement, factory)

### Contact Page
- `contact.title` - Page title
- `contact.subtitle` - Page subtitle
- `contact.description` - Page description
- `contact.address` / `contact.phone` / `contact.email` / `contact.hours`
- `contact.form.name` - Name field
- `contact.form.email` - Email field
- `contact.form.phone` - Phone field
- `contact.form.company` - Company field
- `contact.form.subject` - Subject field
- `contact.form.message` - Message field
- `contact.form.send` - Send button text
- `contact.form.success` - Success message
- `contact.form.error` - Error message
- `contact.sales` - Sales inquiries text
- `contact.support` - Support text
- `contact.follow` - Follow us text

### Quote Form
- `quote.title` - Page title
- `quote.subtitle` - Page subtitle
- `quote.desc` - Page description
- `quote.step_one` / `quote.step_two` / `quote.step_three`
- `quote.company` - Company name field
- `quote.contact_person` - Contact person field
- `quote.email` - Email field
- `quote.phone` - Phone field
- `quote.industry` - Industry field
- `quote.items` - Quote items section
- `quote.add_item` - Add item button
- `quote.part_number` - Part number field
- `quote.part_desc` - Description field
- `quote.manufacturer` - Manufacturer field
- `quote.quantity` - Quantity field
- `quote.category` - Category field
- `quote.submit` - Submit button
- `quote.success` - Success message
- `quote.error` - Error message
- `quote.remove` - Remove item button
- `quote.reference` - Reference number label

### Authentication
- `auth.login` - Login title
- `auth.register` - Register title
- `auth.name` - Name field
- `auth.email` - Email field
- `auth.password` - Password field
- `auth.company` - Company field
- `auth.role` - Role field
- `auth.login_btn` - Login button
- `auth.register_btn` - Register button
- `auth.have_account` - "Already have account?" text
- `auth.no_account` - "Don't have account?" text
- `auth.reset_password` - Reset password link
- `auth.account_details` - Account details section
- `auth.logout_confirm` - Logout confirmation
- `auth.welcome` - Welcome message
- `auth.profile` - Profile menu
- `auth.settings` - Settings menu
- `auth.preferences` - Preferences menu

### Footer
- `footer.about` - About text
- `footer.quick_links` - Quick links section
- `footer.contact_info` - Contact info section
- `footer.company` - Company links
- `footer.services` - Services links
- `footer.support` - Support links
- `footer.legal` - Legal section
- `footer.privacy` - Privacy policy link
- `footer.terms` - Terms of service link
- `footer.powered_by` - Powered by text
- `footer.rights` - Copyright text
- `footer.social` - Social media section
- `footer.address` - Address
- `footer.business_hours` - Business hours

### Common UI
- `common.learn_more` - Learn more button
- `common.view_all` - View all button
- `common.get_started` - Get started button
- `common.read_more` - Read more button
- `common.loading` - Loading text
- `common.error` - Error text
- `common.success` - Success text
- `common.close` - Close button
- `common.back` - Back button
- `common.next` - Next button
- `common.submit` - Submit button
- `common.cancel` - Cancel button
- `common.save` - Save button
- `common.delete` - Delete button
- `common.edit` - Edit button
- `common.search` - Search field
- `common.filter` - Filter field
- `common.no_results` - No results found
- `common.loading_more` - Loading more
- `common.or` - Or text
- `common.and` - And text
- `common.all` - All text

### Theme & Language
- `theme.light` - Light mode label
- `theme.dark` - Dark mode label
- `theme.toggle` - Toggle theme text
- `language.english` - English language name
- `language.arabic` - Arabic language name
- `language.toggle` - Switch language text

### Messages & Notifications
- `messages.welcome` - Welcome message
- `messages.thank_you` - Thank you message
- `messages.error_occurred` - Error occurred message
- `messages.please_wait` - Please wait message
- `messages.required_field` - Required field message
- `messages.invalid_email` - Invalid email message
- `messages.password_mismatch` - Password mismatch message
- `messages.login_failed` - Login failed message
- `messages.register_success` - Register success message
- `messages.logout_success` - Logout success message

## Adding New Translations

1. **Edit the JSON files**:
   - `locales/en/common.json` for English
   - `locales/ar/common.json` for Arabic

2. **Add new key-value pairs** maintaining the hierarchy:
   ```json
   {
     "section": {
       "subsection": {
         "key": "value"
       }
     }
   }
   ```

3. **Use in components**:
   ```tsx
   const { t } = useLanguage();
   return <h1>{t('section.subsection.key')}</h1>;
   ```

## RTL/LTR Support

- **LanguageContext** automatically sets `document.dir="rtl"` for Arabic
- **Tailwind classes** support RTL with `rtl:` prefix:
  ```tsx
  <div className="space-x-4 rtl:space-x-reverse">
  ```
- **Text alignment** handled via RTL-aware classes
- **Flexbox and grid** automatically reflow for RTL

## Language Switching

Users can switch languages via:
1. **Header language toggle** button
2. **Footer language link**
3. Preference is saved to `localStorage` as `language` key
4. Default language is English (en)

## Current Translation Status

✅ **Complete**: 450+ translation keys across all pages and components
✅ **Arabic**: Full Arabic translations with professional localization
✅ **RTL Support**: Automatic right-to-left layout for Arabic
✅ **Forms**: All form labels and validation messages translated
✅ **Navigation**: Complete navigation menu translations
✅ **Content**: All page content fully translated

## Translation Notes

- Arabic translations maintain formal business tone
- Industry-specific terminology preserved in both languages
- Contact information and company details consistent across languages
- Form validation messages user-friendly in both languages
- CTAs (Call-to-Action) optimized for each language audience

## Future Enhancement

To add more languages:
1. Create new file: `locales/[lang]/common.json`
2. Add language option to LanguageContext
3. Update language selector in Header
4. Update Footer language links

## Image & Content Assets

### Image Directory Structure
```
public/images/
├── home/
│   ├── hero-industrial-1.svg
│   └── hero-supply-chain.svg
├── industries/
│   ├── water.svg
│   ├── power.svg
│   ├── manufacturing.svg
│   ├── petrochemical.svg
│   ├── mining.svg
│   └── infrastructure.svg
├── products/
│   └── pump.svg (and other product images)
└── backgrounds/
    └── (placeholder backgrounds)
```

### Using Images in Content

All image paths reference the `public/images/` directory:
- Hero images: `/images/home/hero-*.svg`
- Industry images: `/images/industries/[industry].svg`
- Product images: `/images/products/[product].svg`

## Icons & SVG Components

All icons have been converted from lucide-react to inline SVG components to support server-side rendering. Icons are embedded directly in components as functions.

---

**Last Updated**: November 2025
**Maintainer**: ARWAD Trading Development Team
