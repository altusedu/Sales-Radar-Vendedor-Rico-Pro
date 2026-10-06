/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/radar-vendedor-rico',
  assetPrefix: '/radar-vendedor-rico',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
