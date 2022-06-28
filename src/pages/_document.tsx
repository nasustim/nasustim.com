import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* load external font */}
          <link
            href='https://fonts.googleapis.com/css2?family=Signika+Negative:wght@700&family=Work+Sans:ital,wght@0,400;0,600;1,400&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
