'use client'

import Index from '../components/templates/index/index'
import Head from 'next/head'
import { SITE_DOMAIN } from '../constants'

const Page = () => {
  return (
    <>
      <Head>
        <title>top</title>
        <link rel='canonical' href={`${SITE_DOMAIN}/`} />
        <meta name='robots' content='index,follow' />
      </Head>
      <Index />
    </>
  )
}

export default Page
