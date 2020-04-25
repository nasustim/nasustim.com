import React from 'react'

import {container, sp, pc} from './style.module.scss'
import NavTitle from '../../molecules/navTitle'
import NavButton from '../../molecules/navButton'

const Nav = ({currentPath, device}) => {
  const isTop = currentPath.match(/whoami/)
  const deviceStyle = device === 'desktop' ? pc : sp

  return <header className={`${container} ${deviceStyle}`}>
    <NavTitle device={device} />
    <NavButton isTop={isTop} device={device} />
  </header>
}

export default Nav