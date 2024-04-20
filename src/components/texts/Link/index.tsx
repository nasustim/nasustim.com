import { type FC, type ReactNode } from 'react'
import NextLink from 'next/link'

const Variant = ['none', 'primary']
const styles: Record<(typeof Variant)[number], string> = {
  none: 'p-0 outline-none bg-transparent cursor-pointer appearance-none',
  primary: 'text-indigo font-default font-semibold underline hover:text-sky',
}

interface Props {
  children: ReactNode
  href: string
  isInternal?: boolean
  variant?: (typeof Variant)[number]
}

export const Link: FC<Props> = ({ href, isInternal, children, variant = 'primary' }) => (
  <NextLink href={href} className={styles[variant]} target={isInternal ? '' : '_blank'}>
    {children}
  </NextLink>
)
