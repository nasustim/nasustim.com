import getArticleContent, { ArticleContent, getArticleUris } from 'repositories/article'
import Meta from 'components/common/meta'
import HTMLify from 'components/common/htmlify'
import Footer from 'components/common/footer'

import styles from '../styles/about-me.module.scss'

type Props = { article: ArticleContent }

const WorkPage: React.FC<Props> = ({ article }) => {
  const metaProps: MetaProps = {
    title: article.attributes.title,
    description: article.attributes.description,
    updatedDate: article.attributes.date,
    pageId: article.attributes.pageid,
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <HTMLify markdown={article.body} />
      <Footer />
    </div>
  )
}

export default WorkPage

//export const config = { amp: true }

type StaticProps = { params: { slug: string } }
export const getStaticProps = async ({ params }: StaticProps) => {
  const articleContent = await getArticleContent(params.slug)
  return {
    props: {
      article: articleContent,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getArticleUris()
  return { paths, fallback: false }
}
