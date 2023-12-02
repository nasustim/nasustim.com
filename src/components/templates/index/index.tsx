import type { FC } from 'react'
import style from '../index.module.scss'
import Section from '../_utils/Section'
import HeaderProfile from '@nasustim.com/components/organisms/HeaderProfile'

const Template: FC = () => (
  <div className={style.template}>
    <Section>
      <HeaderProfile />
    </Section>
  </div>
)
export default Template
