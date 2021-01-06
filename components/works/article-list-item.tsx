import Link from 'next/link'

import styles from './styles/article-list-item.module.scss'

type Props = {
  item: {
    title: string
    imgPath: string
    uri: string
    updatedDate: string
  }
}

const ArticleListItem: React.FC<Props> = ({ item }) => {
  return (
    <Link href={item.uri}>
      <div className={styles.container}>
        <div className={styles.thumbnailWrapper}>
          <img className={styles.thumbnail} src={item.imgPath} />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{item.title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default ArticleListItem
