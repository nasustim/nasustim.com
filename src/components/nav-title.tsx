import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../assets/logo.svg'

import { MAX_TABLET_SIZE } from '../style/constants.scss'

const NavTitle = () => (
  <Wrapper>
    <Link to='/'>
      <img src={logo} alt='logo' />
    </Link>
  </Wrapper>
)

export default NavTitle

const Wrapper = styled.div`
  margin: 15px;
  width: 45px; // 10px * 2 + 15px
  @media screen and (max-width: ${MAX_TABLET_SIZE}) {
    width: 35px; // 10px * 2 + 15
  }
  * {
    height: 100%;
    margin: 0;
    padding: 0;

    vertical-align: bottom;
    box-sizing: border-box;
  }
  img {
    margin: 0;
    padding: 0;
  }
`
