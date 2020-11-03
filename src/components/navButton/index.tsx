import React from 'react'
import { Link } from 'gatsby'

const NavButton = ({ isTop }) => (
  <ul>
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
    <Style />
  </ul>
)

export default NavButton

const Style = () => (
  <style jsx>{`
    ul {
      height: 100%;
      margin: 0;
      display: inline-flex;
      flex-direction: row;
      align-items: center;

      > li {
        display: inline-block;
        margin: 0 0 0 15px;
        padding: 10px 20px;
        transition: all 200ms ease-in-out;
        [data-selected='true'] {
          background-color: $color-black;
        }
        :hover {
          background-color: $color-transparent-black;
          color: $color-primary;
        }
        h3 {
          font-size: 24px;
          @media screen and (max-width: $max-tablet-size) {
            font-size: 14px;
          }
        }
        text-decoration: none;
        color: $color-black;
        [data-selected='true'] {
          color: $color-white;
        }
      }
    }
  `}</style>
)
