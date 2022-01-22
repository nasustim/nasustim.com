import React from 'react'

import App from 'next/app'
import Head from 'next/head'

const gaTrackingId = 'UA-130581618-1'

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaTrackingId}', {page_path: window.location.pathname,});`,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
