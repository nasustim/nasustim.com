import React from 'react'

import style from './style.module.scss'

type Props = {}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

export default Layout
