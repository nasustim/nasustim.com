import React from 'react'
import { Link } from 'gatsby'

import logo from './logo.svg'

const NavTitle = () => (
  <div className={`container`}>
    <Link to='/'>
      <img className={'logo-img'} src={logo} alt='logo' />
    </Link>
    <Style />
  </div>
)

export default NavTitle

const Style = () => (
  <style jsx>{`
    div.container {
      margin: 15px;
      width: 45px; // 10px * 2 + 15px
      @media screen and (max-width: $max-tablet-size) {
        width: 35px; // 10px * 2 + 15
      }
      * {
        height: 100%;
        margin: 0;
        padding: 0;

        vertical-align: bottom;
        box-sizing: border-box;
      }
      img.logo-img {
        margin: 0;
        padding: 0;
      }
    }
  `}</style>
)
