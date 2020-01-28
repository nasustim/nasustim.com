import React from 'react'

import {container, pc, sp} from './style.module.scss'

const TopImg = ({imgSrc, device}) =>  <img 
  className={`${container} ${device === 'desktop' ? pc : sp}`} 
  src={imgSrc}
  key={`img--${imgSrc}`} />


export default TopImg