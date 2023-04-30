/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizeFonts: true,
    forceSwcTransforms: true,
    appDir: true,
  },
  output: 'export',
  reactStrictMode: true,
}
