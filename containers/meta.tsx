import Head from 'next/head'

const Meta: React.FC<MetaProps> = ({ title, description, updatedDate, pageId }) => (
  <Head>
    <title>{title + ' - nasustim.com'}</title>
    <meta property='og:url' content=' ページの URL' />
    <meta property='og:type' content={pageId === '/' ? 'website' : 'article'} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:site_name' content='nasustim.com' />
    <meta property='og:image' content={pageId + '/ogp.png'} />
  </Head>
)

export default Meta
