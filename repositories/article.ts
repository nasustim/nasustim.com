import { loadArticle, loadArticleList } from '../utils/loader'

export default async function getArticleContent(slug: string): Promise<ArticleContent> {
  return await loadArticle(slug)
}

export async function getArticleUris(): Promise<ArticleUriList> {
  return (await loadArticleList()).map(({ uri }) => uri)
}

export type ArticleContent = FrontMatter

export type ArticleUriList = Array<string>
