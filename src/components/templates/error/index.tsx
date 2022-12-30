import React, { ReactNode } from 'react'
import style from './index.module.scss'

import Section from '../../molecules/Layout/Section'
import H1 from '../../atoms/Text/H1'

interface Props {
  error?: Error
}

const defaultError = new Error('Internal Error')

const Template: React.FC<Props> = ({ error = defaultError }) => (
  <div className={style.template}>
    <div className={style.template__inner}>
      <Section>
        <H1>{error.message}</H1>
      </Section>
    </div>
  </div>
)
export default Template
