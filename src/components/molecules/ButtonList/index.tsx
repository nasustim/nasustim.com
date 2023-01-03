import React, { ReactNode } from 'react'
import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const ButtonList: React.FC<Props> = ({ children }) => {
  return <div className={style['button-list']}>{children}</div>
}

export default ButtonList
