import React from 'react'
import getTopPageContent, {ArticleList} from '../repositories/top'


import Meta from '../containers/meta'
import HTMLify from '../containers/htmlify'

import ProfileContent, {ProfileProps} from '../containers/profileContent'
import Social from '../containers/social'

import styles from './styles/index.module.scss'


type Props = {
  body: string
  updatedDate: string
  description: string
  articleList: ArticleList
}

export default function IndexPage(props: Props) {
  const metaProps: MetaProps = {
    pageId: '/',
    title: 'What is nasustim?',
    description: props.description,
    updatedDate: props.updatedDate,
  }
  const profileProps: ProfileProps = {
    text: profileText
  }

  return <div className={styles.container}>
    <Meta { ...metaProps } />
    <ProfileContent {...profileProps} />
    <Social />
  </div>
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const topPageData = await getTopPageContent()
  return {
    props: topPageData,
  }
}

// ------
// ToDo: これもマークダウン or 何かで管理したい
const profileText = [
  `はじめまして、日比野光紘です。`,
  `1994年11月 岐阜県生まれ。大学で電子情報技術、大学院ではメディアアートを専攻。`,
  `現在は都内のIT企業でソーシャルゲームの開発に携わっています。`,
]