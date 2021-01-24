import React from 'react'
import dayjs from 'dayjs'

import ArticleListItem from 'components/works/article-list-item'

import styles from './styles/page.module.scss'

type Item = {
  title: string
  imgPath: string
  uri: string
  updatedDate: string
}
type Props = {
  articleItems: Array<Item>
  id?: string
}

const Page: React.FC<Props> = ({ articleItems, id = undefined }) => {
  const sortedArticleItems = articleItems.sort((a, b) => (dayjs(a.updatedDate).isAfter(dayjs(b.updatedDate)) ? -1 : 1))
  return (
    <React.Fragment>
      <h1 className={styles.title}>Works</h1>
      <section id={id} className={styles.wrapper}>
        {sortedArticleItems.map((item, index) => (
          <ArticleListItem key={`key-item-${item.uri}`} item={item} index={index} />
        ))}
      </section>
    </React.Fragment>
  )
}

export default Page
