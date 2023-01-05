import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Tracker from '../components/atoms/SEO/Tracker'

export default class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }
  render() {
    const measurementId = process.env.GA_MEASUREMENT_ID
    return (
      <Html lang='ja'>
        <Head>
          {/* load external font */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;700&family=Work+Sans:wght@400;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {measurementId ? <Tracker gaTrackingId={measurementId} /> : undefined}
        </body>
      </Html>
    )
  }
}
