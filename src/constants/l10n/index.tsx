import { ReactNode } from 'react'

type StringWithRuby = {
  value: string | ReactNode
  ruby: string | ReactNode
}[]

export type L10nItem =
  | {
      value: string
      type: 'string'
    }
  | {
      value: Array<string>
      type: 'multi-string'
    }
  | {
      value: StringWithRuby
      type: 'string-with-ruby'
    }

type L10nContent = {
  name: L10nItem
}

export const en: L10nContent = {
  name: {
    type: 'string',
    value: 'Mitsuhiro HIBINO',
  },
}

export const ja: L10nContent = {
  name: {
    type: 'string-with-ruby',
    value: [
      { value: '日', ruby: 'ひ' },
      { value: '比', ruby: 'び' },
      { value: '野', ruby: 'の' },
      { value: <>&nbsp;</>, ruby: <>&nbsp;</> },
      { value: '光', ruby: 'みつ' },
      { value: '紘', ruby: 'ひろ' },
    ],
  },
}
