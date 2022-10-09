import React from 'react'
import Layout from '../layout'

import Section from '../organisms/Section'
import { Ul, Li } from '../organisms/List'

import PageTitle from '../atoms/PageTitle'
import SectionTitle from '../atoms/SectionTitle'
import FlabbiedImage from '../atoms/Image/Flabbied'
import Text from '../atoms/Text'
import Link from '../atoms/Link'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <PageTitle>nasustim.com</PageTitle>
      <FlabbiedImage src='/static/profile_400x400.jpg' width={150} height={150} />
      <Section>
        <Text>
          岐阜県岐阜市出身、都内在住のソフトウェアエンジニア。現在は<Link to='https://mixi.co.jp/'>株式会社MIXI</Link>
          で美容サロン予約サービスのサーバサイド, インフラ開発を担当している。
        </Text>
      </Section>
      <Section>
        <SectionTitle>Links</SectionTitle>
        <Ul>
          <Li>
            Keybase: <Link to='https://keybase.io/nasustim'>https://keybase.io/nasustim</Link>
          </Li>
          <Li>
            GitHub: <Link to='https://github.com/nasustim'>https://github.com/nasustim</Link>
          </Li>
          <Li>
            Facebook: <Link to='https://www.facebook.com/mitsuhibino'>https://www.facebook.com/mitsuhibino</Link>
          </Li>
        </Ul>
      </Section>
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
