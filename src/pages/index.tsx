import React from 'react'
import Layout from '../components/layout'

import Section from '../components/organisms/Section'
import { Ul, Li } from '../components/molecules/List'

import SectionTitle from '../components/atoms/Text/H2'
import Link from '../components/atoms/Text/Link'

import HeaderProfile from '../components/organisms/HeaderProfile'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Section>
        <HeaderProfile />
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
