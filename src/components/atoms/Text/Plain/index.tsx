import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Text: FC<Props> = ({ children }) => (
  <p className='text-primary-sub text-sm leading-normal font-default'>{children}</p>
)

export default Text
