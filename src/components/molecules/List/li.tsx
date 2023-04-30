import type { FC, ReactNode } from 'react'
import Text from '../../atoms/Text/Plain'

interface Props {
  children: ReactNode
}

const Li: FC<Props> = ({ children }) => (
  <li>
    <Text>{children}</Text>
  </li>
)
export default Li
