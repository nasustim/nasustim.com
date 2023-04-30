import type { FC, ReactNode } from 'react'
import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const Text: FC<Props> = ({ children }) => <h2 className={style.h2}>{children}</h2>

export default Text
