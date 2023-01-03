import React, { ReactNode } from 'react'
import style from './index.module.scss'

interface Props {
  children: ReactNode
  isCentered?: boolean
}

const Text: React.FC<Props> = (props) => {
  const isCentered = props.isCentered ? 1 : 0
  return (
    <h1 className={style.h1} data-is-centered={isCentered}>
      {props.children}
    </h1>
  )
}

export default Text
