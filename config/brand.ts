const envLogoLight = process.env.NEXT_PUBLIC_BRAND_LOGO_LIGHT
const envLogoDark = process.env.NEXT_PUBLIC_BRAND_LOGO_DARK
const envHeroVideo = process.env.NEXT_PUBLIC_BRAND_HERO_VIDEO
const envHeroPoster = process.env.NEXT_PUBLIC_BRAND_HERO_POSTER
const envOgImage = process.env.NEXT_PUBLIC_BRAND_OG_IMAGE
const envIcon = process.env.NEXT_PUBLIC_BRAND_ICON

export const brandAssets = {
  // Uses env when provided, falls back to placeholders
  logoLight: envLogoLight || "/images/brand/logo-light.svg",
  logoDark: envLogoDark || "/images/brand/logo-dark.svg",
  heroVideo: envHeroVideo || "",
  heroPoster: envHeroPoster || "/images/home/hero-industrial-1.svg",
  ogImage: envOgImage || "/images/brand/og.svg",
  icon: envIcon || "/images/brand/logo-light.svg",
}

export function getActiveLogo(isDark: boolean) {
  return isDark ? (brandAssets.logoDark || brandAssets.logoLight) : (brandAssets.logoLight || brandAssets.logoDark)
}

// Contact and social configuration (public)
const envEmail = process.env.NEXT_PUBLIC_SITE_EMAIL
const envPhone = process.env.NEXT_PUBLIC_SITE_PHONE
const envAddress = process.env.NEXT_PUBLIC_SITE_ADDRESS

const envFacebook = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK
const envTwitter = process.env.NEXT_PUBLIC_SOCIAL_TWITTER
const envLinkedin = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN
const envInstagram = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM
const envYouTube = process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE

export const siteContacts = {
  email: envEmail || 'info@arwad.org',
  phone: envPhone || '+971 4 123 4567',
  address: envAddress || 'Business Bay, Dubai, UAE',
}

export const socialLinks = {
  facebook: envFacebook || '',
  twitter: envTwitter || '',
  linkedin: envLinkedin || '',
  instagram: envInstagram || '',
  youtube: envYouTube || '',
}
