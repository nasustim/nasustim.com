import type { ReactNode, FC } from 'react'
import Section from '../_utils/Section'

type Props = {
  children: ReactNode
}

const Template: FC<Props> = ({ children }) => (
  <div className='bg-white'>
    <Section>{children}</Section>
  </div>
)
export default Template
