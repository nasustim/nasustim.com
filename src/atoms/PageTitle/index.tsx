import React, { ReactNode } from 'react'

import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const PageTitle: React.FC<Props> = ({ children }) => <h1 className={style.root}>{children}</h1>

export default PageTitle
