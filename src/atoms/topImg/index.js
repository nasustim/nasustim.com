import React from 'react'

import {container, topFigImg, topFigCaption, pcContainer, spContainer, pcCaption, spCaption, pcH1, spH1, highlight} from './style.module.scss'

const TopImg = ({imgSrc, device, title}) =>  
  <figure className={`${container} ${device === 'desktop' ? pcContainer : spContainer}`} >
    <img 
      className={topFigImg}
      src={imgSrc}
      alt={title}
      key={`img--${imgSrc}`}
    />
    <figcaption className={`${topFigCaption} ${device === 'desktop' ? pcCaption : spCaption}`} >
      <div><h1 className={device === 'desktop' ? pcH1 : spH1}>{title}</h1></div>
    </figcaption>
    <div className={`${highlight}`}></div>
  </figure>


export default TopImg