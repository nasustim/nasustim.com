import '../styles/index.scss'

import App from 'next/app'
import Head from 'next/head'
import styles from './_app.module.scss'


export default class _App extends App {

  render () {
    const { Component, pageProps } = this.props

    return <div className={ styles.layout } >
      <Head>
        <title>{ pageProps.title }</title>
      </Head>
      <Component {...pageProps} />
    </div>
  }
}