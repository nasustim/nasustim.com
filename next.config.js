const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  return {
    // sassOptions: {
    //   includePaths: [path.join(__dirname, 'styles')],
    // },
    env: {
      SITE_TITLE: 'nasustim.com',
    },
    experimental: {
      optimizeFonts: true,
    },
    reactStrictMode: true,
  }
}
