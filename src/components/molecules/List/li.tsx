import Text from '@nasustim.com/components/atoms/Text/Plain'
import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Li: FC<Props> = ({ children }) => (
  <li>
    <Text>{children}</Text>
  </li>
)
export default Li
