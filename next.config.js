const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  return {
    // sassOptions: {
    //   includePaths: [path.join(__dirname, 'styles')],
    // },
    env: {
      SITE_TITLE: 'nasustim.com',
      GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    },
    experimental: {
      optimizeFonts: true,
    },
    reactStrictMode: true,
  }
}
