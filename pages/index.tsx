import React from 'react'
import Layout from '../components/Layout'
import { getArticleList } from '../repositories/top'

type Props = {}

export default function IndexPage(props: Props) {
  const layoutProps = {
    pageId: '/',
    title: '',
    description: '',
    updatedDate: '',
  }
  return (
    <Layout {...layoutProps}>
      <div>{'home'}</div>
    </Layout>
  )
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
