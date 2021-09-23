import { loadArticle, loadArticleList } from '../utils/content-loader'

export default async function getArticleContent(slug: string): Promise<ArticleContent> {
  return await loadArticle(slug)
}

export async function getArticleUris(): Promise<ArticleUriList> {
  return (await loadArticleList()).map(({ uri }) => uri)
}

export type ArticleContent = FrontMatter
export type Attributes = FrontMatterAttributes

export type ArticleUriList = Array<string>
