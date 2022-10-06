import React from 'react'
import Layout from '../layout'

import Section from '../organisms/Section'
import { Ul, Li } from '../organisms/List'

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
      <Section>
        <Text>
          岐阜県岐阜市出身、都内在住のソフトウェアエンジニア。現在は株式会社MIXIで美容サロン予約サービスのサーバサイド,
          インフラ開発を担当している。
        </Text>
      </Section>
      <Section>
        <SectionTitle>Links</SectionTitle>
        <Ul>
          <Li>
            Keybase:{' '}
            <a target='_blank' href='https://keybase.io/nasustim'>
              https://keybase.io/nasustim
            </a>
          </Li>
          <Li>
            GitHub:{' '}
            <a target='_blank' href='https://github.com/nasustim'>
              https://github.com/nasustim
            </a>
          </Li>
          <Li>
            Facebook:{' '}
            <a target='_blank' href='https://www.facebook.com/mitsuhibino'>
              https://www.facebook.com/mitsuhibino
            </a>
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
