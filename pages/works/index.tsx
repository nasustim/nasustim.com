import { getArticleList, ArticleList as TypeArticleList } from 'repositories/works'

import Meta from 'components/common/meta'
import Page from 'containers/works/page'
import Footer from 'components/common/footer'

import styles from '../styles/works.module.scss'

type Props = {
  body: string
  updatedDate: string
  description: string
  articleItems: TypeArticleList
}

export default function IndexPage(props: Props) {
  const metaProps: MetaProps = {
    pageId: 'works',
    title: 'Works',
    description: 'xxxx',
    updatedDate: 'xxxx',
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <Page articleItems={props.articleItems} />
      <Footer />
    </div>
  )
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const articleItems = await getArticleList()
  return {
    props: {
      articleItems,
    },
  }
}
