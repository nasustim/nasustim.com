import React from 'react'
import {Link} from 'gatsby'
import {anchor, list, navBar, pc, sp, selected} from './style.module.scss'

import Typography from '../../utils/typography'

const NavButton = ({isTop, device}) => {
  const deviceStyle = device === 'desktop' ? pc : sp

  const portfolio = !isTop ? selected : ''
  const whoami = !!isTop ? selected : ''

  return <ul className={navBar}>
    <li className={`${list} ${deviceStyle} ${portfolio}`}>
      <Link data-selected={!isTop} className={`${anchor}`} to="/"><h3>Portfolio</h3></Link>
    </li>
    <li className={`${list} ${deviceStyle} ${whoami}`}>
      <Link data-selected={!!isTop} className={`${anchor}`} to="/whoami"><h3>Whoami</h3></Link>
    </li>
  </ul>
}

export default NavButton