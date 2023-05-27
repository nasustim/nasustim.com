import type { FC } from 'react'
import style from '../index.module.scss'

import Section from '../_layout/Section'

import HeaderProfile from '../../organisms/HeaderProfile'

const Template: FC = () => (
  <div className={style.template}>
    <Section>
      <HeaderProfile />
    </Section>
  </div>
)
export default Template
