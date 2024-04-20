import { joinStr } from '@/util/string'
import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const baseStyle = 'text-primary-sub leading-normal font-default'

export const PEn: FC<Props> = ({ children }) => <p className={joinStr(baseStyle, 'font-light text-sm')}>{children}</p>
