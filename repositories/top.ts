import { loadProfile, loadArticleList, ArticleListItem } from '../utils/loader'

export default async function getTopPageContent() {
  const profileLoader = loadProfile()
  const articleListLoader = loadArticleList()

  return Promise.all([profileLoader, articleListLoader]).then(([{ body, attributes }, articleList]) => {
    return {
      body,
      updatedDate: attributes.date,
      description: attributes.description,
      articleList,
    }
  })
}

export type ArticleList = Array<ArticleListItem>
