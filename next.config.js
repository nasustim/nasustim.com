/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
    typedRoutes: true,
  },
  output: 'export',
  reactStrictMode: true,
}
