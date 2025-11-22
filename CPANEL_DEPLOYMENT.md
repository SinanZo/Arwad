# ARWAD Trading - cPanel Deployment Guide

## 📦 Package Contents

This is a **static HTML version** of the ARWAD Trading website, optimized for standard cPanel hosting.

**What's Included:**
- ✅ All website pages (Home, About, Industries, Products, Services, Contact, Register, Quote)
- ✅ Bilingual support (English/Arabic with RTL)
- ✅ Light/Dark theme toggle
- ✅ Responsive design for all devices
- ✅ Professional industrial images
- ✅ WhatsApp integration button
- ✅ All styling and animations

**What's NOT Included (requires Node.js hosting):**
- ❌ Database functionality (quotes and contacts won't save to database)
- ❌ Admin dashboard
- ❌ Email confirmations
- ❌ Analytics dashboard
- ❌ User authentication

**Forms Behavior:** Contact and quote forms will show success messages but won't actually save data or send emails. You'll need to integrate with a third-party form service (see recommendations below).

---

## 🚀 Deployment Steps

### Step 1: Access cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root folder)

### Step 2: Clear Existing Files (if any)

1. Select all files in `public_html`
2. Click **Delete** to remove old content
3. Confirm deletion

### Step 3: Upload the Website

**Option A: Upload ZIP file**
1. Click **Upload** button in File Manager
2. Select `arwad-trading-static.zip`
3. Wait for upload to complete
4. Go back to File Manager
5. Right-click the ZIP file → **Extract**
6. Move all extracted files from the folder to `public_html` root
7. Delete the empty folder and ZIP file

**Option B: Upload files directly**
1. Click **Upload** button
2. Select all files from the `dist/public/` folder
3. Upload them directly to `public_html`

### Step 4: Verify Deployment

1. Visit your domain (e.g., `https://yourdomain.com`)
2. The ARWAD Trading homepage should load
3. Test navigation between pages
4. Test language switching (EN/AR)
5. Test theme toggle (Light/Dark)
6. Verify WhatsApp button works

---

## 📁 File Structure

```
public_html/
├── index.html              # Main homepage
├── assets/                 # CSS and JavaScript files
│   ├── index-*.css        # Compiled styles
│   └── index-*.js         # Compiled scripts
├── images/                 # All website images
│   ├── home/              # Homepage images
│   ├── about/             # About page images
│   ├── industries/        # Industry images
│   ├── products/          # Product images
│   ├── services/          # Service images
│   └── contact/           # Contact page images
├── videos/                 # Hero video
│   └── hero.mp4           # Industrial facility video
├── logo-light.png         # Logo for light mode
├── logo-dark.png          # Logo for dark mode
└── favicon.png            # Browser favicon
```

---

## 🔧 Form Integration Options

Since the backend is not included, you'll need to integrate forms with a third-party service:

### Option 1: Formspree (Easiest)
1. Sign up at https://formspree.io
2. Create a new form
3. Get your form endpoint URL
4. Update form `action` attributes in the HTML

### Option 2: Google Forms
1. Create Google Forms for quotes and contact
2. Embed them or link to them from the pages

### Option 3: Email Service (e.g., EmailJS)
1. Sign up at https://www.emailjs.com
2. Configure email templates
3. Add EmailJS SDK to send emails directly from browser

### Option 4: PHP Contact Form
1. Create a simple PHP script to handle form submissions
2. Configure SMTP settings in cPanel
3. Update forms to submit to PHP script

---

## 🌐 Domain Configuration

### Setting Up Your Domain

1. **Point Domain to Hosting:**
   - Update your domain's nameservers to your hosting provider's nameservers
   - Or update A record to point to your server's IP address

2. **SSL Certificate:**
   - In cPanel, go to **SSL/TLS Status**
   - Enable AutoSSL for your domain
   - Wait for certificate to be issued (usually 5-10 minutes)

3. **Force HTTPS:**
   - In cPanel, go to **File Manager**
   - Create/edit `.htaccess` file in `public_html`
   - Add these lines:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

## 🎨 Customization

### Update Contact Information

Contact details are embedded in the HTML. To update:

1. Open `index.html` in cPanel Code Editor
2. Search for phone numbers: `+971-50-1028312` and `+971-4-45780055`
3. Search for address: `102, Al Qouz 3, Bur Dubai`
4. Search for email: `info@arwad.org`
5. Replace with your updated information
6. Save changes

### Update Logo

1. Upload your new logo files to `public_html`:
   - `logo-light.png` (for light mode)
   - `logo-dark.png` (for dark mode)
2. Keep the same filenames or update references in `index.html`

### Update Favicon

1. Upload your favicon as `favicon.png` to `public_html`
2. Or update the `<link rel="icon">` tag in `index.html`

---

## 📱 WhatsApp Integration

The WhatsApp button is configured with: **+971-50-1028312**

To change the number:
1. Edit `index.html`
2. Search for `https://wa.me/971501028312`
3. Replace with your WhatsApp number (format: country code + number, no spaces or symbols)
4. Example: `https://wa.me/971501234567`

---

## 🔍 SEO Optimization

The website includes:
- ✅ Meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Optimized images
- ✅ Fast loading times

**To improve SEO further:**

1. **Add Google Analytics:**
   - Get tracking code from Google Analytics
   - Add before `</head>` tag in `index.html`

2. **Submit Sitemap:**
   - Create `sitemap.xml` listing all pages
   - Submit to Google Search Console

3. **Add robots.txt:**
   - Create `robots.txt` in `public_html`
   - Allow search engines to crawl your site

---

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images folder uploaded completely
- Verify file permissions (should be 644 for files, 755 for folders)

### Pages Not Found (404 Errors)
- This is a Single Page Application (SPA)
- All routing is handled by JavaScript
- Ensure `index.html` is in the root of `public_html`

### Styles Not Applied
- Clear browser cache (Ctrl+F5)
- Check that `assets/` folder uploaded correctly
- Verify CSS file paths in `index.html`

### WhatsApp Button Not Working
- Verify WhatsApp number format (no spaces, dashes, or parentheses)
- Test on mobile device (WhatsApp app must be installed)

---

## 📞 Support

For technical issues with:
- **Hosting/cPanel:** Contact your hosting provider
- **Website customization:** Refer to this documentation
- **Full backend deployment:** Continue with MongoDB + Vercel + GitHub setup

---

## ⚠️ Important Notes

1. **This is a static version** - Database features are disabled
2. **Forms don't save data** - Integrate with form service for functionality
3. **No admin panel** - Use full deployment for admin features
4. **Regular backups** - Download website files regularly via cPanel

---

## 🚀 Next Steps: Full Deployment

When ready for full functionality:

1. **Deploy to Vercel:**
   - Host the Node.js backend
   - Connect MongoDB database
   - Enable all features (admin, forms, analytics)

2. **Connect GitHub:**
   - Version control
   - Automatic deployments
   - Team collaboration

3. **Custom Domain:**
   - Point domain to Vercel
   - Keep all features working
   - Professional email setup

---

**Deployed:** $(date)  
**Version:** Static HTML Build  
**Company:** ARWAD Trading - MRO & Supply Chain Solutions  
**Website:** www.arwad.org
