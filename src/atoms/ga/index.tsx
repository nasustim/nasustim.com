import React from 'react'

type Props = {
  measurementId: string
}

const Component: React.FC<Props> = ({ measurementId }) => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: _loadScript(measurementId),
        }}
      />
    </>
  )
}

export default Component

const _loadScript = (measurementId: string) =>
  `
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', '${measurementId}');
`.replaceAll(/\n|\r/g, '')
