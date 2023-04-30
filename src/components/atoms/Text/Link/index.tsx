import type { FC, ReactNode } from 'react'
import NextLink from 'next/link'

import style from './index.module.scss'
import { UrlObject } from 'url'

interface Props {
  children: ReactNode
  href: UrlObject
  isInternal?: boolean
}

const Link: FC<Props> = (props) => (
  <NextLink href={props.href} className={style.link} target={props.isInternal ? '' : '_blank'}>
    {props.children}
  </NextLink>
)
export default Link
