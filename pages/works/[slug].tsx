import React from 'react'
import { GetStaticProps } from 'next'
import { getArticleContent, ArticleContent, getArticleUri } from '../../repositories/article'

import Layout from '../../components/Layout'
import HTMLify from '../../components/HTMLify'

type Props = {
  article: ArticleContent
}

const WorkPage: React.FC<Props> = ({ article }) => {
  const layoutProps = {
    title: article.attributes.title,
    description: article.attributes.description,
    updatedDate: article.attributes.date,
    pageId: article.attributes.pageId,
  }

  return (
    <Layout {...layoutProps}>
      <div>{HTMLify(article.body)}</div>
    </Layout>
  )
}

export default WorkPage

//export const config = { amp: true }

type StaticProps = { params: { slug: string } }
export const getStaticProps = async ({ params }: StaticProps) => {
  const article = await getArticleContent(params.slug as string)
  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getArticleUri()
  return { paths, fallback: false }
}
