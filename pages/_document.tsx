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
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <link
            href='https://fonts.googleapis.com/css2?family=Mukta:wght@600&family=Spectral:ital,wght@0,300;1,300&display=optional'
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
