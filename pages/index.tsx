import getTopPageContent, { ArticleList } from 'repositories/top'
import { getArticleList, ArticleList as TypeArticleList } from 'repositories/works'

import Meta, { Props as MetaProps } from 'components/common/meta'
import Page, { ProfileProps } from 'containers/index/top'
import BioPage from 'containers/index/bio'
import WorksPage from 'containers/index/works'
import Footer from 'components/common/footer'

import styles from './styles/index.module.scss'

type Props = {
  updatedDate: string
  description: string
  articleList: ArticleList
  articleItems: TypeArticleList
}

export default function IndexPage(props: Props) {
  const metaProps: MetaProps = {
    title: 'top',
    description: 'Mitsuhiro Hibino. a creator, software engineer',
    updatedDate: '2020-05-07T09:00:00.000Z',
  }
  const profileProps: ProfileProps = {
    imgUri: `/about-me/me.jpg`,
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <Page id='top' {...profileProps} />
      <BioPage id='bio' />
      <WorksPage id='works' articleItems={props.articleItems} />
      <Footer />
    </div>
  )
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const topPageContent = await getTopPageContent()
  const articleItems = await getArticleList()

  return {
    props: Object.assign({}, Object.assign({}, topPageContent), { articleItems }),
  }
}
