import React from 'react'

import { MDXRemote } from 'next-mdx-remote'

import styles from './styles/bio.module.scss'

type Props = {
  id: string
}

const Bio: React.FC<Props> = ({ id }) => {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.document}>
        <h1>Bio</h1>
        <div>
          <p>1994年11月 岐阜県出身、東京都在住。</p>
          <p>大学で電子情報技術、大学院でメディア表現を学び、現在は都内でWebエンジニアとして働いています。</p>
        </div>
        <h2>Skills</h2>
        <div>
          <p>開発</p>
        </div>
        <ul>
          <li>JavaScript/TypeScript, Perl, C/C++,,,etc</li>
          <li>Git, Docker, AWS</li>
        </ul>
        <div>
          <p>その他</p>
        </div>
        <ul>
          <li>はんだ付け, Adobe(Illustrator, Premiere), Ableton Live, プロトタイピング</li>
        </ul>
      </div>
    </section>
  )
}

export default Bio
