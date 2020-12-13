const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    GA_TRACKING_ID_FOR_BROWSER: process.env.GA_TRACK_ID,
  },
}
