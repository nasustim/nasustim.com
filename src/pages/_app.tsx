import '@acab/reset.css'
import '../global.css'

import React from 'react'

import App from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default class _App extends App {
  render() {
    const { Component } = this.props
    const pageProps = this.props.pageProps as SuperPageProps

    const measurementId = process.env.GA_MEASUREMENT_ID ?? ''
    const canonicalUrl = (process.env.DOMAIN ?? '') + pageProps.meta.canonicalPath
    const isNoindex = pageProps.meta.isNoindex
    const title = pageProps.meta.title ? `${pageProps.meta.title} - nasustim.com` : 'nasustim.com'

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />

          <Script
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            onLoad={() => {
              _setupGA(measurementId)
            }}
          />

          <link rel='canonical' href={canonicalUrl}></link>
          {isNoindex ? <meta name='robots' content='noindex,nofollow'></meta> : null}
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

function _setupGA(measurementId: string): void {
  //@ts-ignore
  window.dataLayer = window.dataLayer ?? []
  //@ts-ignore
  function gtag() {
    //@ts-ignore
    dataLayer.push(arguments)
  }
  //@ts-ignore
  gtag('js', new Date())
  //@ts-ignore
  gtag('config', measurementId)
}
