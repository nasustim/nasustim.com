import React from 'react'
import getTopPageContent, {ArticleList} from '../repositories/top'


import Meta from '../Containers/meta'
import HTMLify from '../Containers/htmlify'


type Props = {
  body: string
  updatedDate: string
  description: string
  articleList: ArticleList
}

export default function IndexPage(props: Props) {
  const layoutProps: MetaProps = {
    pageId: '/',
    title: 'What is nasustim?',
    description: props.description,
    updatedDate: props.updatedDate,
  }
  return <div>
    <Meta { ...layoutProps } />
    {HTMLify(props.body)}
    wawawa
    { props.articleList.map(v => (<p key={ v.uri }>{ v.title + ' - ' + v.uri }</p>)) }
  </div>
}

//export const config = { amp: true }

export const getStaticProps = async () => {
  const topPageData = await getTopPageContent()
  return {
    props: topPageData,
  }
}
