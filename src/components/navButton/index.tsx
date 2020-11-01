import React from 'react'
import { NavBar, Link, List } from './style'

const NavButton = ({ isTop, device }) => (
  <NavBar>
    <List data-selected={!isTop} device={device}>
      <Link data-selected={!isTop} to='/'>
        <h3>Portfolio</h3>
      </Link>
    </List>
    <List data-selected={!!isTop} device={device}>
      <Link data-selected={!!isTop} to='/whoami'>
        <h3>Whoami</h3>
      </Link>
    </List>
  </NavBar>
)

export default NavButton
