import React from 'react'
import { GetStaticProps } from 'next'
import getArticleContent, { ArticleContent, getArticleUris } from '../../repositories/article'

import Meta from '../../components/Layout/Meta'
import HTMLify from '../../components/HTMLify'

type Props = {
  article: ArticleContent
}

const WorkPage: React.FC<Props> = ({ article }) => {
  const metaProps: MetaProps = {
    title: article.attributes.title,
    description: article.attributes.description,
    updatedDate: article.attributes.date,
    pageId: article.attributes.pageid,
  }

  return <div>
    <Meta { ...metaProps } />
    {HTMLify(article.body)}
  </div>
}

export default WorkPage

//export const config = { amp: true }

type StaticProps = { params: { slug: string } }
export const getStaticProps = async ({ params }: StaticProps) => {
  const articleContent = await getArticleContent(params.slug)
  return {
    props: articleContent,
  }
}

export const getStaticPaths = async () => {
  const paths = await getArticleUris()
  return { paths, fallback: false }
}
