import '@acab/reset.css'
import type { FC, ReactNode } from 'react'
import Tracker from '@/components/molecules/SEO/Tracker'
import { SITE_DOMAIN, SITE_TITLE } from '@/constants/values'
import { signikaNegative, workSans } from 'src/font'

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang='ja'>
    <head>
      <Tracker gaTrackingId={process.env.GA_MEASUREMENT_ID} />
    </head>
    <body className={`${signikaNegative.variable} ${workSans.variable}`}>{children}</body>
  </html>
)

export default RootLayout

export const metadata = {
  title: `top - ${SITE_TITLE}`,
  alternates: {
    canonical: `${SITE_DOMAIN}/`,
  },
}
