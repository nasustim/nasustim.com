import React, { ReactNode } from 'react'
import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const Text: React.FC<Props> = ({ children }) => <p className={style.root}>{children}</p>

export default Text