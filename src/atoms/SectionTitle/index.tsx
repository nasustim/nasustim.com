import React, { ReactNode } from 'react'

import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const PageTitle: React.FC<Props> = ({ children }) => <h2 className={style.root}>{children}</h2>

export default PageTitle
