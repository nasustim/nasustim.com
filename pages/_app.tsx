import '../styles/global.scss'

import App from 'next/app'
import Head from 'next/head'

import Background from 'containers/common/background'
import Header from 'containers/common/header'

import styles from './styles/_app.module.scss'

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div className={styles.layout}>
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
        </Head>

        <div className={styles.background}>
          <Background />
        </div>
        <div className={styles.container}>
          <header className={styles.header}>
            <Header />
          </header>
          <main className={styles.content}>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    )
  }
}
