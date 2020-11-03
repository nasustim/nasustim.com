import React from 'react'

import NavTitle from '../../components/navTitle'
import NavButton from '../../components/navButton'

const Nav = ({ currentPath }) => {
  const isTop = currentPath.match(/whoami/)

  return (
    <header>
      <NavTitle />
      <NavButton isTop={isTop} />
      <Style />
    </header>
  )
}

export default Nav

const Style = () => (
  <style jsx>{`
    header {
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
      @media screen and (max-width: $max-tablet-width) {
        height: 60px;
      }
    }
  `}</style>
)
