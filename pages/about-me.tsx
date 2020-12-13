import React from 'react'
import getTopPageContent, { ArticleList } from '../repositories/top'

import Meta from '../containers/meta'
import HTMLify from '../containers/htmlify'

import styles from './styles/about-me.module.scss'

type Props = {
  body: string
  updatedDate: string
  description: string
  articleList: ArticleList
}

export default function IndexPage(props: Props) {
  const metaProps: MetaProps = {
    pageId: 'about-me',
    title: 'About Me',
    description: props.description,
    updatedDate: props.updatedDate,
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <div className={styles.document}>{HTMLify(props.body)}</div>
    </div>
  )
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const topPageData = await getTopPageContent()
  return {
    props: topPageData,
  }
}
