import React from 'react'
import HTMLify from 'components/common/htmlify'

import styles from './styles/bio.module.scss'

type Props = {
  body: string
  id: string
}

const Bio: React.FC<Props> = ({ body, id }) => {
  return (
    <section id={id} className={styles.container}>
      <h1 className={styles.title}>Bio</h1>
      <HTMLify markdown={body} />
    </section>
  )
}

export default Bio
