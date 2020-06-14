import React from "react"
import { Link } from "gatsby"
import { Container, LogoImg } from "./style.js"

import logo from "./logo.svg"

const NavTitle = ({ device }) => (
  <Container device={device}>
    <Link to="/">
      <LogoImg src={logo} alt={`logo`} />
    </Link>
  </Container>
)

export default NavTitle
