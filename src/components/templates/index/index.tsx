import React from 'react'
import style from './index.module.scss'

import Section from '../../molecules/Layout/Section'

import HeaderProfile from '../../organisms/HeaderProfile'

interface Props {}

const Template: React.FC<Props> = () => (
  <div className={style.template}>
    <div className={style.template__inner}>
      <Section>
        <HeaderProfile />
      </Section>
    </div>
  </div>
)
export default Template
