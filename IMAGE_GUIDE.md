# Image Assets Guide

## Required Images for ARWAD Trading (أرواد) Website

This document lists all image placeholders used in the website and provides guidelines for replacing them with real assets.

## Directory Structure

```
public/
  images/
    home/
      hero-industrial-1.jpg
      hero-industrial-2.jpg (optional)
      hero-industrial-3.jpg (optional)
      about-snapshot.jpg
    industries/
      water.jpg
      power.jpg
      manufacturing.jpg
      petrochemical.jpg
      mining.jpg
      infrastructure.jpg
    products/
      ventilators.jpg
      inspection.jpg
      cooling.jpg
      desalination.jpg
      heavy.jpg
      measurement.jpg
      factory.jpg
      spare-parts.jpg
    services/
      procurement.jpg
      customized.jpg
      automation.jpg
      assessment.jpg
```

## Image Specifications

### Hero Images
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG or WebP
- **File Size**: < 500KB (optimized)
- **Content**: Industrial scenes, machinery, plants, workers
- **Examples**:
  - hero-industrial-1.jpg: Wide shot of industrial plant
  - hero-industrial-2.jpg: Control room or automation systems
  - hero-industrial-3.jpg: Engineering team or technical work

### Industry Images
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: JPG or WebP
- **File Size**: < 300KB
- **Content**: Specific to each industry
- **Examples**:
  - water.jpg: Desalination plant, water treatment facility
  - power.jpg: Power plant, transformers, electrical equipment
  - manufacturing.jpg: Production line, packaging machinery
  - petrochemical.jpg: Refinery, chemical processing equipment
  - mining.jpg: Mining equipment, heavy machinery
  - infrastructure.jpg: Buildings, construction, modern facilities

### Product Images
- **Dimensions**: 600x600px (square)
- **Format**: JPG or PNG (with transparency if needed)
- **File Size**: < 200KB
- **Content**: Product category representations
- **Examples**:
  - ventilators.jpg: HVAC systems, air filters
  - inspection.jpg: Testing equipment, measuring devices
  - cooling.jpg: Cooling towers, heat exchangers
  - desalination.jpg: RO membranes, water treatment equipment
  - heavy.jpg: Heavy machinery parts, hydraulics
  - measurement.jpg: Control panels, sensors, instruments
  - factory.jpg: Industrial components, plant equipment
  - spare-parts.jpg: Various mechanical parts

### Service Images
- **Dimensions**: 800x600px
- **Format**: JPG or WebP
- **File Size**: < 300KB
- **Content**: Service-related imagery
- **Examples**:
  - procurement.jpg: Warehouse, logistics, supply chain
  - customized.jpg: Engineering design, CAD, custom fabrication
  - automation.jpg: Control systems, SCADA, automation equipment
  - assessment.jpg: Engineers analyzing, data analysis, consulting

## Image Sourcing Guidelines

### Stock Photo Sources
- **Unsplash** (unsplash.com) - Free, high-quality
- **Pexels** (pexels.com) - Free, industrial photos
- **Pixabay** (pixabay.com) - Free, commercial use
- **Shutterstock** (shutterstock.com) - Premium, extensive library
- **Getty Images** (gettyimages.com) - Premium, professional

### Search Keywords
Use these keywords when searching for appropriate images:

**General:**
- industrial plant
- factory equipment
- engineering
- machinery
- industrial facility
- manufacturing plant

**Industry-Specific:**
- water treatment plant
- desalination facility
- power generation
- electrical substation
- manufacturing production line
- chemical plant refinery
- mining operations
- construction infrastructure

**Products:**
- industrial HVAC
- testing equipment
- heat exchanger
- water treatment
- heavy machinery parts
- control systems
- industrial sensors
- mechanical components

## Image Optimization

Before adding images to the project:

1. **Resize** to recommended dimensions
2. **Compress** using tools like:
   - TinyPNG (tinypng.com)
   - ImageOptim (imageoptim.com)
   - Squoosh (squoosh.app)
3. **Convert** to WebP for better compression (optional)
4. **Name** files consistently (lowercase, hyphens)

## Video Assets (Optional)

For hero sections, you can use video instead of images:

### Hero Videos
- **Dimensions**: 1920x1080px (Full HD)
- **Format**: MP4 (H.264 codec)
- **Length**: 10-30 seconds (loop)
- **File Size**: < 5MB (optimized)
- **Content**: Industrial operations, machinery in action

**Optimization:**
```bash
# Using FFmpeg (example)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an output.mp4
```

## Alternative: Gradients

If real images are not available immediately, the current gradient backgrounds provide a professional look:

**Current Implementation:**
- Primary blue gradients for industries/general
- Accent red gradients for products/CTAs
- CSS gradients are lightweight and always sharp

## Next.js Image Component

When adding images, use Next.js Image component for optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/industries/water.jpg"
  alt="Water and Desalination Facility"
  width={800}
  height={600}
  className="rounded-lg"
  priority={false}
/>
```

**Benefits:**
- Automatic optimization
- Lazy loading
- Responsive images
- WebP conversion

## Updating Image Paths

To update from placeholder to real images:

1. Add image files to `public/images/` directory
2. No code changes needed if using same filenames
3. If using different names, update in components:
   - `app/page.tsx` - Home page
   - `app/industries/page.tsx` - Industries
   - `app/products/page.tsx` - Products
   - Components: `IndustryCard`, `ProductCard`, etc.

## Copyright & Licensing

**Important:**
- Ensure all images are properly licensed
- Keep records of image sources
- Respect attribution requirements
- Use royalty-free or properly purchased images
- For client photos: obtain proper releases

## Brand Guidelines

When selecting images:
- ✅ Professional, high-quality
- ✅ Industrial/engineering focus
- ✅ Modern equipment and facilities
- ✅ Diverse representation
- ✅ Clean, well-lit compositions
- ❌ Avoid outdated equipment
- ❌ Avoid blurry or low-quality images
- ❌ Avoid overly staged or generic stock photos

## Testing Images

After adding images:
1. Check loading performance
2. Verify responsive behavior
3. Test on mobile devices
4. Verify dark mode compatibility
5. Check accessibility (alt text)

---

**Note**: Until real images are added, the gradient backgrounds provide a clean, professional appearance that works well with the overall design.
