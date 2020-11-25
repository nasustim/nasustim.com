import React from 'react'
import Layout from '../components/Layout'
import { getWhoamiContent } from '../repositories/whoami'

import HTMLify from '../components/HTMLify'

type Props = {
  body: string
  updatedDate: string
  description: string
}

export default function WhoamiPage(props: Props) {
  const layoutProps = {
    pageId: '/',
    title: '',
    description: props.description,
    updatedDate: props.updatedDate,
  }
  return (
    <Layout {...layoutProps}>
      <div>{HTMLify(props.body)}</div>
    </Layout>
  )
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const whoami = await getWhoamiContent()
  return {
    props: { ...whoami },
  }
}
