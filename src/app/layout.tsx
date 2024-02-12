import './globals.css'
import { type ReactNode } from 'react'
import { SITE_DOMAIN, SITE_TITLE } from '@/constants/values'
import { fontClassNames } from '@/fonts'
import { joinStr } from '@/util/string'
import { GoogleAnalytics } from '@next/third-parties/google'

type Props = {
  children: ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='ja' className={joinStr(...fontClassNames)}>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID} />
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
