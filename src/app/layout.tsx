import './globals.css'
import { GA_MEASUREMENT_ID, SEO, SITE_DOMAIN, SITE_TITLE } from '@/config'
import { fontClassNames } from '@/fonts'
import { DefaultLayout } from '@/layout'
import { GoogleAnalytics } from '@next/third-parties/google'
import { clsx } from 'clsx'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={clsx(...fontClassNames)}>
      <head>
        <link rel='icon' href='/favicon.svg' sizes='any' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/favicon.png' />
      </head>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
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
