const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      DOMAIN: 'https://nasustim.com',
      SITE_TITLE: 'nasustim.com',
      GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    },
    experimental: {
      optimizeFonts: true,
      forceSwcTransforms: true,
    },
    reactStrictMode: true,
  }
}
