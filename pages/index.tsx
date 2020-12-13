import React from 'react'
import getTopPageContent, { ArticleList } from '../repositories/top'

import Meta from '../containers/meta'
//import HTMLify from '../Containers/htmlify'

import ProfileContent, { ProfileProps } from '../containers/profileContent'

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
    title: 'home',
    description: props.description,
    updatedDate: props.updatedDate,
  }
  const profileProps: ProfileProps = {
    text: profileText,
    imgUri: `/static/me/2018-11.jpg`,
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <ProfileContent {...profileProps} />
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

// ------
// ToDo: これもマークダウン or 何かで管理したい
const profileText = [`nasustim`]
