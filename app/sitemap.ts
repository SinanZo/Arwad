import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://arwad.org'
  const routes = [
    '/',
    '/about',
    '/industries',
    '/products',
    '/our-services',
    '/contact',
    '/register',
    '/quote-order',
  ]
  const now = new Date()
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
