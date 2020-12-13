import ReactMarkdown from 'react-markdown/with-html'

const HTMLify = (md: string) => <ReactMarkdown source={md} escapeHtml={false} />

export default HTMLify
