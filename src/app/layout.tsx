import '@acab/reset.css'
import type { FC, ReactNode } from 'react'

import Tracker from '../components/molecules/SEO/Tracker'
import { SITE_DOMAIN, SITE_TITLE } from '../constants'

import { Signika_Negative, Work_Sans } from 'next/font/google'

export const signika_negative = Signika_Negative({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signika-negative',
})

export const work_sans = Work_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
  <>
    <html lang='ja'>
      <head>
        <Tracker gaTrackingId={process.env.GA_MEASUREMENT_ID} />
      </head>
      <body className={`${signika_negative.variable} ${work_sans.variable}`}>{children}</body>
    </html>
  </>
)

export default RootLayout

export const metadata = {
  title: `top - ${SITE_TITLE}`,
  alternates: {
    canonical: `${SITE_DOMAIN}/`,
  },
}
