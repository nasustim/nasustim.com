import getArticleContent, { Attributes, getArticleUris } from 'repositories/article'
import Meta, { Props as MetaProps } from 'components/common/meta'
import Footer from 'components/common/footer'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import styles from './styles/slug.module.scss'
import htmlStyles from '../../containers/index/styles/bio.module.scss'

type Props = {
  attributes: Attributes
  body: MDXRemoteSerializeResult
}

const WorkPage: React.FC<Props> = ({ body, attributes }) => {
  const metaProps: MetaProps = {
    title: attributes.title,
    description: attributes.description,
    updatedDate: attributes.date,
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <div className={htmlStyles.document}>
        <MDXRemote {...body} />
      </div>
      <Footer />
    </div>
  )
}

export default WorkPage

//export const config = { amp: true }

type StaticProps = { params: { slug: string } }
export const getStaticProps = async ({ params }: StaticProps) => {
  const articleContent = await getArticleContent(params.slug)
  const body = await serialize(articleContent.body)

  return {
    props: {
      attributes: articleContent.attributes,
      body: body,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getArticleUris()
  return { paths, fallback: false }
}
