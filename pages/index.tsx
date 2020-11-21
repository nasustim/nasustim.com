import React from 'react'
import Layout from '../components/Layout'
import { getWhoamiContent } from '../repositories/whoami'

type Props = {
  body: string
  updatedDate: string
  description: string
}

export default function IndexPage(props: Props) {
  const layoutProps = {
    pageId: '/',
    title: '',
    description: props.description,
    updatedDate: props.updatedDate,
  }
  return (
    <Layout {...layoutProps}>
      <p>{props.body}</p>
    </Layout>
  )
}

export const config = { amp: true }

export const getStaticProps = async () => {
  const whoami = await getWhoamiContent()
  return {
    props: { ...whoami },
  }
}
