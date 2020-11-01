const path = require('path')

const TITLE = `nasustim.com`
const AUTHOR = `Mitsuhiro Hibino`
const DESCRIPTION = `Mitsuhiro Hibino: software developer`
const SITE_URL = `https://nasustim.com`
const SOCIAL = {
  twitter: `nasustim`,
}
const GA_TRACK_ID = `UA-130581618-1`

module.exports = {
  siteMetadata: {
    title: TITLE,
    author: AUTHOR,
    description: DESCRIPTION,
    siteUrl: SITE_URL,
    social: SOCIAL,
    establishYear: 2010,
  },
  polyfill: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/works`,
        name: `works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/whoami`,
        name: `whoami`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              showCaptions: true,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 750,
              ratio: 1.77,
              height: 422,
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 750,
              height: 422,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GA_TRACK_ID,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: TITLE,
        short_name: TITLE,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.ts`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: path.join(SITE_URL, '/sitemap.xml'),
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: './src/types/graphql-type.d.ts',
      },
    },
    {
      resolve: `gatsby-plugin-styled-jsx`,
      options: {
        optimizeForSpeed: true,
        sourceMaps: false,
        vendorPrefixes: true,
        styleModule: './src/style/index.scss',
      },
    },
  ],
}
