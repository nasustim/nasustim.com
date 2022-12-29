import React, { ReactNode } from 'react'
import Text from '../../atoms/Text/Plain'

interface Props {
  children: ReactNode
}

const Li: React.FC<Props> = ({ children }) => (
  <li>
    <Text>{children}</Text>
  </li>
)
export default Li
