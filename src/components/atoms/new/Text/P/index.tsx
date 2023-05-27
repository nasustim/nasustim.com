import type { FC, ReactNode } from 'react'
import style from './index.module.scss'

type Props = {
  children: ReactNode
}

export const P: FC<Props> = ({ children }) => {
  return <p className={style.top}>{children}</p>
}
