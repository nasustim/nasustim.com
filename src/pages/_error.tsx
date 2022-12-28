// 現状クライアント側のみで動作させているので、Next.jsの都合で用意している
import React from 'react'
import Layout from '../components/layout'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => (
  <Layout>
    <p>error</p>
  </Layout>
)

export default Page

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        isNoindex: true,
      },
    },
  }
}
