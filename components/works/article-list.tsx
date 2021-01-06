import dayjs from 'dayjs'

type Props = {
  list: Array<{
    title: string
    imgPath: string
    uri: string
    updatedDate: string
  }>
}

const ArticleList: React.FC<Props> = ({ list }) => {
  return (
    <ul>
      {list
        .sort((a, b) => (dayjs(a.updatedDate).isAfter(dayjs(b.updatedDate)) ? -1 : 1))
        .map((l) => (
          <li>
            {l.title}, {l.uri}, {l.imgPath}, {l.updatedDate}
          </li>
        ))}
    </ul>
  )
}

export default ArticleList
