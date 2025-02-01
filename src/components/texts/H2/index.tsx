import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const H2: FC<Props> = ({ children }) => (
  <h2 className='text-primary font-heading text-2xl leading-tight desktop:leading-normal'>{children}</h2>
)
