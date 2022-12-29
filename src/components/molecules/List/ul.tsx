import React, { ReactNode } from 'react'
import style from './ul.module.scss'

interface Props {
  children: ReactNode
}

const Ul: React.FC<Props> = ({ children }) => <ul className={style.ul}>{children}</ul>
export default Ul
