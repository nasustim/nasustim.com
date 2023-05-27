import type { FC, ReactNode } from 'react'
import style from './index.module.scss'

type Props = {
  children: ReactNode
}

export const H2: FC<Props> = ({ children }) => {
  return <h2 className={style.top}>{children}</h2>
}
