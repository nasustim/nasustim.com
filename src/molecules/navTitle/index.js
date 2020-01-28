import React from 'react'
import {Link} from 'gatsby'

import {container, svg, pc, sp} from './style.module.scss'

import logo from './logo.svg'

const NavTitle = ({device}) => {

  return <div className={container}>
    <Link to="/">
      <img className={`${svg}`} src={logo} alt={`logo`} />  
    </Link>
  </div>
}

export default NavTitle