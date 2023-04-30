'use client'

import type { FC } from 'react'

interface Props {
  gaTrackingId: string
}
const Tracker: FC<Props> = ({ gaTrackingId }) => {
  return (
    <>
      <script defer src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
      <script
        id='ga'
        defer
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());    
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
            });
        `,
        }}
      />
    </>
  )
}

export default Tracker
