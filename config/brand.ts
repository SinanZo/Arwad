export const brandAssets = {
  // Placeholder assets – replace with production versions when available
  logoLight: "/images/brand/logo-light.svg",
  logoDark: "/images/brand/logo-dark.svg",
  heroVideo: "", // supply mp4 URL when ready
  heroPoster: "/images/home/hero-industrial-1.svg",
  ogImage: "/images/brand/og.svg",
  icon: "/images/brand/logo-light.svg",
}

export function getActiveLogo(isDark: boolean) {
  return isDark ? (brandAssets.logoDark || brandAssets.logoLight) : (brandAssets.logoLight || brandAssets.logoDark)
}
