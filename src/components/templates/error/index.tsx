import React from 'react'
import style from '../index.module.scss'

import Section from '../_utils/Section'
import H1 from '../../atoms/Text/H1'

interface Props {
  error?: Error
}

const defaultError = new Error('Internal Error')

const Template: React.FC<Props> = ({ error = defaultError }) => (
  <div className={style.template}>
    <Section>
      <H1 isCentered={true}>{error.message}</H1>
    </Section>
  </div>
)
export default Template
