import type { ReactNode, FC } from 'react'
import style from '../index.module.scss'

import Section from '../_utils/Section'

type Props = {
  children: ReactNode
}

const Template: FC<Props> = ({ children }) => (
  <div className={style.template}>
    <Section>{children}</Section>
  </div>
)
export default Template
