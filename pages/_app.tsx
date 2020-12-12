import '../styles/index.scss'

import App from 'next/app'
import Head from 'next/head'
import styles from './_app.module.scss'
import Background from '../Containers/background'


export default class _App extends App {

  render () {
    const { Component, pageProps } = this.props

    return <div className={ styles.layout }>
      <Head>
        <title>{ pageProps.title }</title>
      </Head>

      <div className={ styles.background } >
        <Background />
      </div>
      <div className={ styles.container }>
        <div className={ styles.content }>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  }
}