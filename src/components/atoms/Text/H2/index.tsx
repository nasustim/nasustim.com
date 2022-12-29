import React, { ReactNode } from 'react'
import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const Text: React.FC<Props> = ({ children }) => <h2 className={style.h2}>{children}</h2>

export default Text
