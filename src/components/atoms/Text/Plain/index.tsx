import type { FC, ReactNode } from 'react'
import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const Text: FC<Props> = ({ children }) => <p className={style.plain}>{children}</p>

export default Text
