'use client'

import Index from '../components/templates/index/index'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>top</title>
        <link rel='canonical' href={`${process.env.DOMAIN}/`} />
        <meta name='robots' content='index,follow' />
      </Head>
      <Index />
    </>
  )
}

export default Page
