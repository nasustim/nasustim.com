import { useContext } from 'react'
import Head from 'next/head'

import { LocationContext } from 'layout'
export type Props = {
  title: string
  description: string
  updatedDate: string
}

const Meta: React.FC<Props> = ({ title, description, updatedDate }) => {
  const path = useContext(LocationContext)
  const canonicalUrl = `${process.env.URL}${path}`

  const siteTitle = process.env.SITE_TITLE
  const isTopPage = path === '/'
  return (
    <Head>
      <title>{(isTopPage ? '' : `${title} - `) + siteTitle}</title>
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:type' content={isTopPage ? 'website' : 'article'} />
      <meta property='og:title' content={title + ' - nasustim.com'} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='nasustim.com' />
      <meta property='og:image' content={process.env.URL + '/about-me/ogp.png'} />
      <link rel='canonical' href={canonicalUrl}></link>
    </Head>
  )
}

export default Meta
