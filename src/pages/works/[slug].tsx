import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'

type Props = {
  slug: string
} & SuperPageProps

const Page: React.FC<Props> = (props) => {
  const [loading, loaded] = useState(false)

  useEffect(() => {
    loaded(true)
  }, [])

  return !loading ? <div></div> : <div>🚧 Under Construction 🚧</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 以前のページで用意していた個別ページ
  // ToDo: コンテンツを復活させる
  const pathsList = [
    'slash-module-slash-whom',
    'shokei-no-kagami',
    'aster-as-code',
    'dj',
    'from-gifu-to-word',
    'morning-square',
    'nxpc-32',
    'nxps-43',
    'oton-glass',
    'iamasonic-2019',
  ]

  return {
    paths: pathsList.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

interface StaticParams extends ParsedUrlQuery {
  slug: string
}
export const getStaticProps: GetStaticProps<Props, StaticParams> = async (context) => {
  const slug = context.params!.slug

  return {
    props: {
      slug,
      meta: {
        canonicalPath: `/works/${slug}`,
        isNoindex: true,
        title: slug,
      },
    },
  }
}

export default Page
