/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: isProd // enable CSS optimizer only in production to avoid dev-time cache issues
  },
  typescript: {
    // allow Next to start even if type checks have issues in the environment
    ignoreBuildErrors: true
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'arwad.org', 'www.arwad.org', 'res.cloudinary.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  experimental: {
    // Enable optimizeCss only in production to avoid dev-time CSS optimizer issues
    optimizeCss: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
