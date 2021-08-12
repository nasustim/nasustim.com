import React from 'react'
import { unified } from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

import styles from './styles/htmlify.module.scss'

export type Props = {
  markdown: string
}

const HTMLify: React.FC<Props> = ({ markdown }) => {
  // See: https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol2/spring-raining/index.html
  const html = unified().use(parse).use(remark2react, React).processSync(markdown).result

  return <div className={styles.document}>{html}</div>
}

export default HTMLify
