import React, { ReactNode } from 'react'
import style from './index.module.scss'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className={style.root}>
    <div className={style.inner}>{children}</div>
  </div>
)
export default Layout
