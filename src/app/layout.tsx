import '@acab/reset.css'
import type { FC, ReactNode } from 'react'

import Tracker from '../components/atoms/SEO/Tracker'

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
  <>
    <html lang='ja'>
      <head>
        {/* load external font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <link
          href='https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;700&family=Work+Sans:wght@400;600&display=swap'
          rel='stylesheet'
        />
        <Tracker gaTrackingId={process.env.GA_MEASUREMENT_ID || ''} />
      </head>
      <body>{children}</body>
    </html>
  </>
)

export default RootLayout
