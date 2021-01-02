import { readFile, readdir, copyFile } from 'fs/promises'
import { copyFileSync } from 'fs'
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
const staticImgPath = `public/works/`

export async function loadArticle(slug: string): Promise<FrontMatter> {
  const articlePath = resolve(process.cwd(), articleFilePath, slug, defaultMarkdownFileName) // '../'
  return readFile(articlePath, { encoding: 'utf-8' })
    .then((payload) => {
      const article = frontmatter(payload) as FrontMatter
      copyImgs(slug, article.body)
      return article
    })
    .catch(onError)
}

function copyImgs (slug: string, body: string) {
  const includedImgs = body.match(/([\w\.\-\_\/]+\.(?:jpe?g|png|gif))/g)
  if ( includedImgs?.length === 0  ) return

  for (const imgName of includedImgs as Array<string>) {
    const src = resolve(process.cwd(), articleFilePath, slug, imgName)
    const dst = resolve(process.cwd(), staticImgPath, imgName)
    copyFileSync(src, dst)
  }
  return
}

// -------------------------------

export async function loadArticleList(): Promise<Array<ArticleListItem>> {
  const articleDir = resolve(process.cwd(), articleFilePath)
  return readdir(articleDir, { encoding: 'utf-8' })
    .then((v) => {
      return v.filter((i) => !!!i.match(/$./))
    })
    .then((ids) => {
      return Promise.all(ids.map((id) => loadArticle(id))).then((articles) => {
        return articles.map((article) => {
          return {
            title: article.attributes.title,
            imgPath: '',
            uri: `/works/${article.attributes.pageid}`,
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
