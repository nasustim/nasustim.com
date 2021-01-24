import getTopPageContent, { ArticleList } from 'repositories/top'
import { getArticleList, ArticleList as TypeArticleList } from 'repositories/works'

import Meta, { Props as MetaProps } from 'components/common/meta'
import Page, { ProfileProps } from 'containers/index/top'
import BioPage from 'containers/index/bio'
import WorksPage from 'containers/index/works'
import Footer from 'components/common/footer'

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
    title: 'top',
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
      <BioPage id='bio' body={props.body} />
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
