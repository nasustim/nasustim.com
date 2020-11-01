import React from 'react'

import { Container } from './style'
import NavTitle from '../../components/navTitle'
import NavButton from '../../components/navButton'

const Nav = ({ currentPath, device }) => {
  const isTop = currentPath.match(/whoami/)

  return (
    <Container device={device}>
      <NavTitle device={device} />
      <NavButton isTop={isTop} device={device} />
    </Container>
  )
}

export default Nav
