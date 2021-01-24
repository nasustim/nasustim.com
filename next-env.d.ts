/// <reference types="next" />
/// <reference types="next/types/global" />

type FrontMatterAttributes = {
  title: string
  date: string
  description: string
  pageid: string
  headimg: string
}

type FrontMatter = {
  body: string
  attributes: FrontMatterAttributes
}
