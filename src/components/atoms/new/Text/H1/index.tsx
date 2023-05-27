import type { FC, ReactNode } from 'react'
import style from './index.module.scss'

type Props = {
  children: ReactNode
}

export const H1: FC<Props> = ({ children }) => {
  return <h1 className={style.top}>{children}</h1>
}
