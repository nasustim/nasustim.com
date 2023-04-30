import Layout from '../../../components/templates/works'

type Props = {
  slug: string
}

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
