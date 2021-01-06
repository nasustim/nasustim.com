import { readFile, readdir } from 'fs/promises'
import { resolve } from 'path'
import frontmatter from 'front-matter'
import sharp from 'sharp'

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
      copyImgs(slug, article.body, article.attributes.headimg)
      return article
    })
    .catch(onError)
}

function copyImgs(slug: string, body: string, headerimg: string) {
  const includedImgs = body.match(/([\w\.\-\_\/]+\.(?:jpe?g|png|gif))/g)

  const _src = resolve(process.cwd(), articleFilePath, slug, headerimg)
  const _dst = resolve(process.cwd(), staticImgPath, headerimg)
  resize(_src, _dst)
  for (const imgName of includedImgs as Array<string>) {
    const src = resolve(process.cwd(), articleFilePath, slug, imgName)
    const dst = resolve(process.cwd(), staticImgPath, imgName)
    resize(src, dst)
  }
  return
}

async function resize (_src: string, _dst: string) {
  return sharp(_src)
    .resize(860, 600, {
      fit: 'inside'
    })
    .toFile(_dst)
    .then(info => console.log(info))
    .catch(err => { throw new Error(err) })
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
            imgPath: `/works/${article.attributes.headimg}`,
            uri: `/works/${article.attributes.pageid}`,
            updatedDate: article.attributes.date,
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
  updatedDate: string
  description?: string // yodayoda
}
