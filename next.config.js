/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'arwad.org', 'www.arwad.org', 'res.cloudinary.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  experimental: {
    // Enable optimizeCss only in production to avoid dev-time CSS optimizer issues
    optimizeCss: isProd,
  },
  typescript: {
    // allow Next to start even if type checks have issues in the environment
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
