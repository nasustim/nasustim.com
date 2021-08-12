const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  return {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
      GA_TRACKING_ID_FOR_BROWSER: process.env.GA_TRACK_ID,
      URL: process.env.URL,
      SITE_TITLE: 'nasustim.com', // develop, productionで共通なのでここに書く
    },
    experimental: {
      optimizeFonts: true,
    },
    reactStrictMode: true,
  }
}
