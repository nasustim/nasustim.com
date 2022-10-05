import React from 'react'
import Layout from '../layout'

import PageTitle from '../atoms/PageTitle'
import SectionTitle from '../atoms/SectionTitle'
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
      {/* ToDo: コンポーネント化 */}
      <div>
        <SectionTitle>Links</SectionTitle>
        <ul>
          <li>
            Keybase:{' '}
            <a target='_blank' href='https://keybase.io/nasustim'>
              https://keybase.io/nasustim
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a target='_blank' href='https://github.com/nasustim'>
              https://github.com/nasustim
            </a>
          </li>
          <li>
            Facebook:{' '}
            <a target='_blank' href='https://www.facebook.com/mitsuhibino'>
              https://www.facebook.com/mitsuhibino
            </a>
          </li>
        </ul>
      </div>
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
