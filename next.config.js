/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: isProd // enable CSS optimizer only in production to avoid dev-time cache issues
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  experimental: {
    // Enable optimizeCss only in production to avoid dev-time CSS optimizer issues
    optimizeCss: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
