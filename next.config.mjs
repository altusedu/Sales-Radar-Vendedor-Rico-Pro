/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/radar-vendedor-rico-pro',
  assetPrefix: '/radar-vendedor-rico-pro',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
