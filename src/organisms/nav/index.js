import React from "react"

import { Container } from "./style"
import NavTitle from "../../molecules/navTitle"
import NavButton from "../../molecules/navButton"

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
