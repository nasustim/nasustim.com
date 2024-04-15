import { joinStr } from '@/util/string'
import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const baseStyle = 'text-primary-sub leading-normal font-default'

export const TextEn: FC<Props> = ({ children }) => (
  <p className={joinStr(baseStyle, 'text-md', 'font-light')}>{children}</p>
)
export const TextJa: FC<Props> = ({ children }) => <p className={joinStr(baseStyle, 'text-sm')}>{children}</p>
