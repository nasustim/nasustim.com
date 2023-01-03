import React, { type ReactNode } from 'react'
import style from './index.module.scss'

interface Props {
  children: ReactNode
}

const Section: React.FC<Props> = ({ children }) => (
  <section className={style.section}>
    <div className={style.section__inner}>{children}</div>
  </section>
)

export default Section
