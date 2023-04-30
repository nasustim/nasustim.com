import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Ul: FC<Props> = ({ children }) => <ul>{children}</ul>
export default Ul
