import './globals.css'
import { type ReactNode } from 'react'
import { SEO, SITE_DOMAIN, SITE_TITLE } from '@/constants/values'
import { fontClassNames } from '@/fonts'
import { joinStr } from '@/util/string'
import { GoogleAnalytics } from '@next/third-parties/google'
import { type Metadata } from 'next'
import { DefaultLayout } from '@/layout'

type Props = {
  children: ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={joinStr(...fontClassNames)}>
      <head>
        <link rel='icon' href='/favicon.svg' sizes='any' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/favicon.png' />
      </head>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
      <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID} />
    </html>
  )
}

export default RootLayout

const url = `${SITE_DOMAIN}/`

export const metadata: Metadata = {
  title: `${SITE_TITLE}`,
  alternates: {
    canonical: url,
  },
  description: SEO.description,
  openGraph: {
    title: SITE_TITLE,
    description: SEO.description,
    url: url,
    type: 'website',
    locale: 'en_US',
    siteName: SITE_TITLE,
    countryName: 'Japan',
  },
  twitter: {
    creatorId: '@nasustim',
    card: 'summary',
  },
}
