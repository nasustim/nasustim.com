import type { FC, ReactNode } from 'react'
import style from './index.module.scss'

type Props = {
  children: ReactNode
}

export const H3: FC<Props> = ({ children }) => {
  return <h3 className={style.top}>{children}</h3>
}
