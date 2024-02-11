import './globals.css'
import { type ReactNode } from 'react'
import Tracker from '@/components/molecules/SEO/Tracker'
import { SITE_DOMAIN, SITE_TITLE } from '@/constants/values'
import { fontClassNames } from '@/fonts'
import { joinStr } from '@/util/string'

type Props = {
  children: ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='ja' className={joinStr(...fontClassNames)}>
      <head>
        <Tracker gaTrackingId={process.env.GA_MEASUREMENT_ID} />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

export const metadata = {
  title: `${SITE_TITLE}`,
  alternates: {
    canonical: `${SITE_DOMAIN}/`,
  },
}
