import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Sizes, Colors } from '../style/constants'

const NavButton = ({ isTop }) => (
  <Wrapper>
    <li data-selected={!isTop}>
      <Link className={'link'} data-selected={!isTop} to='/'>
        <h3>Portfolio</h3>
      </Link>
    </li>
    <li data-selected={!!isTop}>
      <Link className={'link'} data-selected={!!isTop} to='/whoami'>
        <h3>Whoami</h3>
      </Link>
    </li>
  </Wrapper>
)

export default NavButton

const Wrapper = styled.ul`
  height: 100%;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  & > li {
    display: inline-block;
    margin: 0 0 0 15px;
    padding: 10px 20px;
    transition: all 200ms ease-in-out;
    &[data-selected='true'] {
      background-color: ${Colors.COLOR_BLACK};
      h3 {
        color: ${Colors.COLOR_WHITE};
      }
    }
    &:hover {
      background-color: ${Colors.COLOR_TRANSPARENT_BLACK};
      h3 {
        // color: ${Colors.COLOR_PRIMARY};
      }
    }
    a {
      text-decoration: none;
      h3 {
        color: ${Colors.COLOR_BLACK};
        font-size: 24px;
        @media screen and (max-width: ${Sizes.MAX_TABLET_SIZE}) {
          font-size: 14px;
        }
      }
    }
  }
`
