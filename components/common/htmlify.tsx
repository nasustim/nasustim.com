import React, { ReactChild } from 'react'
import unified from 'unified'
import parse from 'remark-parse'

// tslint:disable-next-line:no-var-requires
const remark2react = require('remark-react') // @types/remark-reactが無かったのでとりいそぎ

import styles from './styles/htmlify.module.scss'

export type Props = {
  markdown: string
}

const HTMLify: React.FC<Props> = ({ markdown }) => {

  // See: https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol2/spring-raining/index.html
  const html = unified()
    .use(parse)
    .use(remark2react)
    .processSync(markdown)
    .result as ReactChild

  return <div className={styles.document}>{ html }</div>
}

export default HTMLify
