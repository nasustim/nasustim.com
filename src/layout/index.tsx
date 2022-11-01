import 'normalize.css'
import '../global.css'

import React, { ReactNode } from 'react'
import style from './index.module.scss'

//import Script from 'next/script'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <html lang='ja'>
    <head>
      {/* load external font */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;700&family=Work+Sans:wght@400;600&display=swap'
        rel='stylesheet'
      />

      <title>{process.env.DOMAIN}</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />

      {/* <Script
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            onLoad={() => {
              _setupGA(process.env.GA_MEASUREMENT_ID ?? '')
            }}
          />*/}
    </head>
    <body>
      <div className={style.root}>
        <div className={style.inner}>{children}</div>
      </div>
    </body>
  </html>
)

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

export default Layout
