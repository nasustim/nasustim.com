import '@acab/reset.css'
import React from 'react'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

import App from 'next/app'
import Head from 'next/head'

export default class _App extends App {
  render() {
    const { Component } = this.props
    const pageProps = this.props.pageProps as SuperPageProps

    const canonicalUrl = (process.env.DOMAIN || '') + pageProps.meta.canonicalPath
    const isNoindex = pageProps.meta.isNoindex
    const title = pageProps.meta.title ? `${pageProps.meta.title} - nasustim.com` : 'nasustim.com'

    return (
      <React.Fragment>
        <Provider store={store}>
          <Head>
            <title>{title}</title>
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <link rel='canonical' href={canonicalUrl}></link>
            {isNoindex ? <meta name='robots' content='noindex,nofollow'></meta> : null}
          </Head>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    )
  }
}
