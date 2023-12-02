/** @type {import('next').NextConfig} */

const defaultConfig = {
  experimental: {
    forceSwcTransforms: true,
    typedRoutes: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
}

const analyerConfig = require('@next/bundle-analyzer')({
  enabled: true,
})({})

module.exports = config = process.env.ANALYZE === 'true' ? analyerConfig : defaultConfig
