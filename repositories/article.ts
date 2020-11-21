import { loadArticle, loadArticleList, Attributes } from '../utils/loader'

async function getArticleUri(): Promise<Array<string>> {
  const articleList = await loadArticleList()
  return articleList.map((v) => `/works/${v}`)
}

// ---------------------

export type ArticleContent = {
  body: string
  attributes: Attributes
}

async function getArticleContent(slug: string): Promise<ArticleContent> {
  const article = await loadArticle(slug)
  return {
    body: article.body,
    attributes: article.attributes as Attributes,
  }
}

// ---------------------

export { getArticleUri, getArticleContent }
