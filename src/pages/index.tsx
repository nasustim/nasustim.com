import React from 'react'
import Layout from '../layout'

import PageTitle from '../atoms/PageTitle'
import Image from '../atoms/Image'
import Text from '../atoms/Text'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <PageTitle>nasustim.com</PageTitle>
      <Image src='/static/profile_400x400.jpg' width={150} height={150} />
      <Text>
        岐阜県岐阜市出身、都内在住のソフトウェアエンジニア。現在は株式会社MIXIで美容サロン予約サービスのサーバサイド,
        インフラ開発を担当している。
      </Text>
    </Layout>
  )
}

export default Page

export const getStaticProps = () => ({
  props: {
    meta: {
      canonicalPath: '/',
      isNoindex: false,
    },
  },
})
