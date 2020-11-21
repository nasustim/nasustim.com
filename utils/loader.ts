import { readFile, readdir } from 'fs/promises'
import { resolve } from 'path'
import frontmatter from 'front-matter'

import { onError } from './error'

const defaultMarkdownFileName = `index.md`

// -------------------------------

const profileFilePath = `content/whoami/`

export async function loadProfile() {
  const myProfilePath = resolve(process.cwd(), profileFilePath, defaultMarkdownFileName)
  return readFile(myProfilePath, { encoding: 'utf-8' })
    .then((payload) => frontmatter(payload))
    .catch(onError)
}

// -------------------------------

const articleFilePath = `content/articles/`

export async function loadArticle(slug: string) {
  const articlePath = resolve(process.cwd(), articleFilePath, slug, defaultMarkdownFileName) // '../'
  return readFile(articlePath, { encoding: 'utf-8' })
    .then((buf) => {
      const { attributes, body } = frontmatter(buf)
      return {
        attributes,
        body,
      }
    })
    .catch(onError)
}

export async function loadArticleList(): Promise<Array<string>> {
  const articleDir = resolve(process.cwd(), articleFilePath)
  return readdir(articleDir, { encoding: 'utf-8' })
    .then((v) => {
      return v.filter((i) => !!!i.match(/$./))
    })
    .catch(onError)
}

// -------------------------------

export type Attributes = {
  title: string
  date: string
  description: string
  pageId: string
  headimg: string
}
