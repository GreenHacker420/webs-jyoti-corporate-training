/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable type checking during build for now
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Image optimization settings
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  // Allow cross-origin requests from network IP
  allowedDevOrigins: [
    '172.27.232.100',
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
      '192.168.1.27'
  ],
}

module.exports = nextConfig
