import type { FC, ReactNode } from 'react'
import { joinStr } from '@/util/string'

interface Props {
  children: ReactNode
  isCentered?: boolean
}

export const H1En: FC<Props> = ({ isCentered, children }) => (
  <h1
    className={joinStr('text-primary font-heading text-3xl leading-none font-bold', isCentered ? 'text-center' : null)}>
    {children}
  </h1>
)
