/** @type {import('next').NextConfig} */
const config =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({
        enabled: true,
      })({})
    : {
        experimental: {
          forceSwcTransforms: true,
          typedRoutes: true,
        },
        output: 'export',
        reactStrictMode: true,
      }

module.exports = config
