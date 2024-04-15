import { TextEn } from '@/components/atoms/Text/Plain'
import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Li: FC<Props> = ({ children }) => (
  <li>
    <TextEn>{children}</TextEn>
  </li>
)
export default Li
