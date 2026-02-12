/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/BusinessWebsite',
  assetPrefix: '/BusinessWebsite',
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
