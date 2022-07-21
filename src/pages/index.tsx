import React from 'react'
import Layout from '../layout'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div>nasustim.com</div>
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
