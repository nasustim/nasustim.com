import React from 'react'
import {Link} from 'gatsby'

import {container, pc, sp, svg} from './style.module.scss'

import logo from './logo.svg'

const NavTitle = ({device}) => {

  const deviceStyle = device === 'desktop' ? pc : sp;

  return <div className={`${container} ${deviceStyle}`}>
    <Link to="/">
      <img className={`${svg}`} src={logo} alt={`logo`} />  
    </Link>
  </div>
}

export default NavTitle