import { Metadata } from 'next'

import { SITE_DOMAIN, SITE_TITLE } from '@nasustim.com/configs/constants'
import Layout from '@nasustim.com/components/templates/works'

type Props = {
  slug: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Page = ({ params }: { params: Props }) => {
  return (
    <Layout>
      <div>🚧 Under Construction 🚧</div>
    </Layout>
  )
}

export const generateStaticParams = () => {
  // 以前のページで用意していた個別ページ
  // ToDo: コンテンツを復活させる
  const slugList = [
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
  ].map((slug) => ({ slug }))

  return slugList
}

export default Page

export async function generateMetadata({ params }: { params: Props }): Promise<Metadata> {
  const slug = params.slug

  return {
    title: `works - ${SITE_TITLE}`,
    alternates: {
      canonical: `${SITE_DOMAIN}/works/${slug}`,
    },
    robots: {
      index: false,
      follow: false,
    },
  }
}
