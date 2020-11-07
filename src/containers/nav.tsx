import React from 'react'
import styled from 'styled-components'

import NavTitle from '../components/nav-title'
import NavButton from '../components/nav-button'

import { MAX_TABLET_SIZE } from '../style/constants.scss'

const Nav = ({ currentPath }) => {
  const isTop = currentPath.match(/whoami/)

  return (
    <Wrapper>
      <NavTitle />
      <NavButton isTop={isTop} />
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.header`
  * {
    box-shadow: none;
  }
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin: 0 0 5px 0;
  animation: gone 130ms ease-out 0s 1 normal forwards running;
  @keyframes gone {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
  position: fixed;
  background-color: rgba($color: #ffffff, $alpha: 0.6);
  height: 110px;
  @media screen and (max-width: ${MAX_TABLET_SIZE}) {
    height: 60px;
  }
`
