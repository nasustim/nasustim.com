import React, { ReactNode } from 'react'
import Link from 'next/link'

import style from './index.module.scss'

interface Props {
  children: ReactNode
  to: string
  isInternal?: boolean
}

const _Link: React.FC<Props> = (props) => (
  <Link href={props.to} className={style.link} target={props.isInternal ? '' : '_blank'}>
    {props.children}
  </Link>
)
export default _Link
