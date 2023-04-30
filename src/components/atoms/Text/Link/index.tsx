import type { FC, ReactNode } from 'react'
import NextLink from 'next/link'

import style from './index.module.scss'

interface Props {
  children: ReactNode
  to: string
  isInternal?: boolean
}

const Link: FC<Props> = (props) => (
  <NextLink href={props.to} className={style.link} target={props.isInternal ? '' : '_blank'}>
    {props.children}
  </NextLink>
)
export default Link
