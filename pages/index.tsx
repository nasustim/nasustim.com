import { useEffect, useState } from 'react'

import getTopPageContent, { ArticleList } from 'repositories/top'
import { getArticleList, ArticleList as TypeArticleList } from 'repositories/works'

import Meta from 'components/common/meta'
import Page, { ProfileProps } from 'containers/index/page'
import WorksPage from 'containers/works/page'
import Footer from 'components/common/footer'
import HTMLify from 'components/common/htmlify'

import styles from './styles/index.module.scss'

type Props = {
  body: string
  updatedDate: string
  description: string
  articleList: ArticleList
  articleItems: TypeArticleList
}

export default function IndexPage(props: Props) {
  const metaProps: MetaProps = {
    pageId: '/',
    title: 'home',
    description: props.description,
    updatedDate: props.updatedDate,
  }
  const profileProps: ProfileProps = {
    imgUri: `/about-me/me.jpg`,
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <Page id='top' {...profileProps} />
      <div id='about-me' style={{ minHeight: '100vh', margin: '40px auto' }}>
        <HTMLify markdown={props.body} />
      </div>
      <WorksPage id='works' articleItems={props.articleItems} />
      <Footer />
    </div>
  )
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const topPageData = await getTopPageContent()
  const articleItems = await getArticleList()
  return {
    props: Object.assign({}, topPageData, { articleItems }),
  }
}
