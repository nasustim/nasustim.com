import getTopPageContent, { ArticleList } from 'repositories/top'

import Meta from 'components/common/meta'
import HTMLify from 'components/common/htmlify'
import Footer from 'components/common/footer'

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
      <HTMLify markdown={props.body} />
      <Footer />
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
