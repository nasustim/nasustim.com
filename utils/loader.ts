import { readFile, readdir } from 'fs/promises'
import { resolve } from 'path'
import frontmatter from 'front-matter'

import { onError } from './error'

const defaultMarkdownFileName = `index.md`

// -------------------------------

const profileFilePath = `content/whoami/`

export async function loadProfile(): Promise<FrontMatter> {
  const myProfilePath = resolve(process.cwd(), profileFilePath, defaultMarkdownFileName)
  return readFile(myProfilePath, { encoding: 'utf-8' })
    .then((payload) => frontmatter(payload) as FrontMatter)
    .catch(onError)
}

// -------------------------------

const articleFilePath = `content/articles/`

export async function loadArticle(slug: string): Promise<FrontMatter> {
  const articlePath = resolve(process.cwd(), articleFilePath, slug, defaultMarkdownFileName) // '../'
  return readFile(articlePath, { encoding: 'utf-8' })
    .then((payload) => {
      return frontmatter(payload) as FrontMatter
    })
    .catch(onError)
}

// -------------------------------

export async function loadArticleList(): Promise<Array<ArticleListItem>> {
  const articleDir = resolve(process.cwd(), articleFilePath)
  return readdir(articleDir, { encoding: 'utf-8' })
    .then((v) => {
      return v.filter((i) => !!!i.match(/$./))
    })
    .then(ids => {
      return Promise.all( ids.map(id => loadArticle(id)) )
        .then(articles => {
          return articles.map(article => {
            return {
              title: article.attributes.title,
              imgPath: '',
              uri: `/works/${ article.attributes.pageid }`
            }
          })
        })
    })
    .catch(onError)
}

// -------------------------------

export type ArticleListItem = {
  imgPath: string
  uri: string
  title: string
}