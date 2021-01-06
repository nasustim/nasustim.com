import { getArticleList, ArticleList as TypeArticleList } from 'repositories/works'

import Meta from 'components/common/meta'
import ArticleList from 'components/works/article-list'

import styles from '../styles/about-me.module.scss'

type Props = {
  body: string
  updatedDate: string
  description: string
  articleItems: TypeArticleList
}

export default function IndexPage(props: Props) {
  const metaProps: MetaProps = {
    pageId: 'about-me',
    title: 'About Me',
    description: 'xxxx',
    updatedDate: 'xxxx',
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <ArticleList list={props.articleItems} />
    </div>
  )
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const articleItems = await getArticleList()
  return {
    props: {
      articleItems
    },
  }
}
