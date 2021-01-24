import { loadArticleList, ArticleListItem } from '../utils/content-loader'

export async function getArticleList(): Promise<Array<ArticleListItem>> {
  return await loadArticleList()
    .then((articleListItem) => articleListItem)
    .catch((err) => {
      throw new Error(err)
    })
}

export type ArticleList = Array<ArticleListItem>
