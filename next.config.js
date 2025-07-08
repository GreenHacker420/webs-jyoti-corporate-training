/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom server configuration for cPanel hosting

  // Configure for subdirectory hosting (uncomment and modify if deploying to subdirectory)
  // basePath: '/your-subdirectory',
  // assetPrefix: '/your-subdirectory',

  // Build configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization settings for cPanel hosting
  images: {
    domains: [
      "localhost",
      "127.0.0.1",
      // Add your cPanel domain here
      // "yourdomain.com",
      // "www.yourdomain.com",

      // External image domains
      "d1yjjnpx0p53s8.cloudfront.net",
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com",
      "mma.prnewswire.com",
      "getvectorlogo.com",
      "news.bostonscientific.com",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "logowik.com",
      "www.olamgroup.com",
      "play-lh.googleusercontent.com",
      "www.beumergroup.com",
      "static.wixstatic.com",
      "process9.com",
      "content.jdmagicbox.com",
      "www.nsfindia.org",
      "image-static.collegedunia.com",
      "dudhi.in",
      "www.experion.co",
    ],
    // Optimize images in production, unoptimized in development
    unoptimized: process.env.NODE_ENV === "development",
    // Image formats for optimization
    formats: ['image/webp', 'image/avif'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Development origins for local testing
  allowedDevOrigins: [
    "172.27.232.100",
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "192.168.1.27",
  ],

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Generate ETags for better caching
  generateEtags: true,

  // Configure headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ]
  },

  // Environment variables configuration
  env: {
    CUSTOM_SERVER: 'true',
    BUILD_TIME: new Date().toISOString(),
  },

  // Custom server allows for API routes and server-side features
  experimental: {
    // Optimize for custom server
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;
