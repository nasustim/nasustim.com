import { useState, useEffect } from 'react'
import Link from 'next/link'

import styles from './styles/article-list-item.module.scss'

type Props = {
  item: {
    title: string
    imgPath: string
    uri: string
    updatedDate: string
  }
  index: number
}

const ArticleListItem: React.FC<Props> = ({ item, index }) => {
  const containerStyle = index % 2 === 0 ? styles.containerEven : styles.containerOdd

  return (
    <Link href={item.uri}>
      <div className={containerStyle}>
        <div className={styles.thumbnailWrapper}>
          <img className={styles.thumbnail} src={item.imgPath} />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.arrowWrapper}>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function set() {
  let _v_0 = 30 + (Math.random() - 0.5) * 18
  let _v_1 = 30 + (Math.random() - 0.5) * 18

  return [_v_0, _v_1]
}

export default ArticleListItem
