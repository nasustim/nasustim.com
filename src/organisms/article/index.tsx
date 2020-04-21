import React from 'react'

import { spContainer, pcContainer } from './style.module.scss'

const Article = ({device, dangerouslySetInnerHTML}) => {
  
  const container = device === `desktop` ? pcContainer : spContainer

  return <article dangerouslySetInnerHTML={dangerouslySetInnerHTML} className={container}></article>
}

export default Article