import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import GA from '../components/atoms/GA'

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props

    const measurementId = process.env.GA_MEASUREMENT_ID ?? ''

    return (
      <React.Fragment>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <GA measurementId={measurementId} />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
