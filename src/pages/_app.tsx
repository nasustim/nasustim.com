import 'normalize.css'
import '../styles/global.scss'

import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import GA from '../atoms/ga'
import Meta from '../atoms/meta'

import Layout from '../layouts'

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props

    const measurementId = process.env.GA_MEASUREMENT_ID ?? ''
    const canonicalUrl = (process.env.DOMAIN ?? '') + pageProps.meta.canonicalPath
    const isNoindex = pageProps.meta.isNoindex
    const title = pageProps.meta.title ? `${pageProps.meta.title} - nasustim.com` : 'nasustim.com'

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />

          <link
            href='https://fonts.googleapis.com/css2?family=Signika+Negative:wght@700&family=Work+Sans:ital,wght@0,400;0,600;1,400&display=swap'
            rel='stylesheet'
          />

          <GA measurementId={measurementId} />
          <Meta
            {...{
              canonicalUrl,
              isNoindex,
            }}
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}
