import React, { ReactNode } from 'react'
import style from './index.module.scss'

import Section from '../../molecules/Layout/Section'
import { Ul, Li } from '../../molecules/List'

import SectionTitle from '../../atoms/Text/H2'
import Link from '../../atoms/Text/Link'

import HeaderProfile from '../../organisms/HeaderProfile'

interface Props {}

const Layout: React.FC<Props> = () => (
  <div className={style.root}>
    <div className={style.inner}>
      <Section>
        <HeaderProfile />
      </Section>
      <Section>
        <SectionTitle>Links</SectionTitle>
        <Ul>
          <Li>
            Keybase: <Link to='https://keybase.io/nasustim'>https://keybase.io/nasustim</Link>
          </Li>
          <Li>
            GitHub: <Link to='https://github.com/nasustim'>https://github.com/nasustim</Link>
          </Li>
          <Li>
            Facebook: <Link to='https://www.facebook.com/mitsuhibino'>https://www.facebook.com/mitsuhibino</Link>
          </Li>
        </Ul>
      </Section>
    </div>
  </div>
)
export default Layout
