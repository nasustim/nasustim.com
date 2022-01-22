import '../styles/global.scss'

import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import GA from '../components/atoms/ga'
import SEO from '../components/atoms/seo'

import Layout from '../components/layout'

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props

    const measurementId = process.env.GA_MEASUREMENT_ID ?? ''
    const canonicalUrl = (process.env.DOMAIN ?? '') + pageProps.seo.canonicalPath
    const isNoindex = pageProps.seo.isNoindex

    return (
      <React.Fragment>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <GA measurementId={measurementId} />
          <SEO
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
