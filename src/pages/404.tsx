import React from 'react'
import Layout from '../components/layout'

type Props = {
  title: string
} & SuperPageProps

const Page: React.FC<Props> = (props) => (
  <Layout>
    <div>404</div>
  </Layout>
)

export default Page

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        canonicalPath: '/404',
        isNoindex: true,
        title: '404 Not Found',
      },
    },
  }
}
