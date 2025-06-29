/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost",
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
    unoptimized: process.env.NODE_ENV === "development",
  },
  allowedDevOrigins: [
    "172.27.232.100",
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "192.168.1.27",
  ],
};

module.exports = nextConfig;
