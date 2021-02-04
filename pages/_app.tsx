import '../styles/global.scss'

import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import Layout from 'layout'

import { config as cssConfig, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faTwitter, faGithub, faFacebook, faKeybase } from '@fortawesome/free-brands-svg-icons'

function addFonts() {
  // ref: https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
  cssConfig.autoAddCss = false
  library.add(faTwitter, faGithub, faFacebook, faKeybase)
}

export default class _App extends App {
  render() {
    // font awesome読み込ませ隊
    addFonts()

    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {!!process.env.GA_TRACKING_ID_FOR_BROWSER && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID_FOR_BROWSER}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.GA_TRACKING_ID_FOR_BROWSER}', {page_path: window.location.pathname,});`,
                }}
              />
            </>
          )}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Noto+Sans+JP:wght@300&family=Noto+Serif+JP:wght@300&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}
