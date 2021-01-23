import getTopPageContent, { ArticleList } from 'repositories/top'

import Meta from 'components/common/meta'
import Page, { ProfileProps } from 'containers/index/page'

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
    imgUri: `/about-me/me.jpg`,
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <Page {...profileProps} />
      {/*<div style={{ backgroundColor: 'green' }}>{`
aaaaaaaaaaaaaaaaa\r\n
aaaaaaaaaaaaaaaaa\r\n
aaaaaaaaaaaaaaaaa\r\n
aaaaaaaaaaaaaaaaa\r\n
aaaaaaaaaaaaaaaaa\r\n
aaaaaaaaaaaaaaaaa\r\n
aaaaaaaaaaaaaaaaa\r\n
  `}</div>*/}
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
