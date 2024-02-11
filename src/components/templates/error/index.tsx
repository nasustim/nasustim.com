import type { FC } from 'react'

import Section from '../_utils/Section'
import H1 from '@/components/atoms/Text/H1'

interface Props {
  error?: Error
}

const defaultError = new Error('Internal Error')

const Template: FC<Props> = ({ error = defaultError }) => (
  <div className='bg-white'>
    <Section>
      <H1 isCentered={true}>{error.message}</H1>
    </Section>
  </div>
)
export default Template
