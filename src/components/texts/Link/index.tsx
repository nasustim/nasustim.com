import type { FC, ReactNode } from 'react'
import NextLink from 'next/link'

interface Props {
  children: ReactNode
  href: string
  isInternal?: boolean
}

const Link: FC<Props> = (props) => {
  const href = props.href
  return (
    <NextLink
      href={href}
      className='text-indigo font-default font-semibold underline hover:text-sky'
      target={props.isInternal ? '' : '_blank'}>
      {props.children}
    </NextLink>
  )
}
export default Link
