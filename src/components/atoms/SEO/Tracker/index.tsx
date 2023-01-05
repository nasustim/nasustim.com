import React from 'react'

interface Props {
  gaTrackingId: string
}
const Tracker: React.FC<Props> = ({ gaTrackingId }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Tracker
