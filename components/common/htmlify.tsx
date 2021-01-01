import ReactMarkdown from 'react-markdown/with-html'

import styles from './styles/htmlify.module.scss'

export type Props = {
  markdown: string
}

const HTMLify: React.FC<Props> = ({ markdown }) => (
  <div className={styles.document}>
    <ReactMarkdown source={markdown} escapeHtml={false} />
  </div>
)

export default HTMLify
