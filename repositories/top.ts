import { loadArticleIds } from '../utils/loader'

export type ArticleList = {
  imgPath: string
  uri: string
  title: string
}

async function getArticleList(): Promise<ArticleList> {
  const articleIds = await loadArticleIds()
  //return articleList
}

// ---------------------

export { getArticleList }
