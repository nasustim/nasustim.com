module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      DOMAIN: 'https://nasustim.com',
      SITE_TITLE: 'nasustim.com',
      GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID ?? '',
    },
    experimental: {
      optimizeFonts: true,
      forceSwcTransforms: true,
      appDir: true,
    },
    output: 'export',
    reactStrictMode: true,
  }
}
