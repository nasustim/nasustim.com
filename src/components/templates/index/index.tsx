import React from 'react'
import style from '../index.module.scss'

import Section from '../_utils/Section'

import HeaderProfile from '../../organisms/HeaderProfile'

interface Props {}

const Template: React.FC<Props> = () => (
  <div className={style.template}>
    <Section>
      <HeaderProfile />
    </Section>
  </div>
)
export default Template
