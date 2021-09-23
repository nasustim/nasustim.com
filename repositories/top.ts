import { loadArticleList, ArticleListItem } from '../utils/content-loader'

export default async function getTopPageContent() {
  const articleListLoader = loadArticleList()

  return Promise.all([articleListLoader]).then(([articleList]) => {
    return {
      articleList,
    }
  })
}

export type ArticleList = Array<ArticleListItem>
