import React from 'react'
import Layout from '../layout'

import PageTitle from '../atoms/PageTitle'
import Image from '../atoms/Image'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <PageTitle text={'nasustim.com'} />
      <Image src='/static/profile_400x400.jpg' width={150} height={150} />
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
