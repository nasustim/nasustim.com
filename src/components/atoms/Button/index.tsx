import React, { ReactNode } from 'react'

import style from './index.module.scss'

interface Props {
  children: ReactNode
  action: () => void
}

const Button: React.FC<Props> = ({ children, action }) => {
  const onClickHalnder = () => {
    action()
  }

  return (
    <button onClick={onClickHalnder} className={style.button}>
      {children}
    </button>
  )
}

export default Button
