/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
    appDir: true,
    typedRoutes: true,
  },
  output: 'export',
  reactStrictMode: true,
}
