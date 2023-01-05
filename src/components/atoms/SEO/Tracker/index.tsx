import React from 'react'
import Script from 'next/script'

interface Props {
  gaTrackingId: string
}

const Tracker: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${props.gaTrackingId}`}
        strategy='afterInteractive'
      />
      <Script id='ga' defer strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());    
            gtag('config', '${props.gaTrackingId}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </React.Fragment>
  )
}

export default Tracker
