import React from 'react'
import {container, child} from './style.module.scss'

import LineImgList from '../../molecules/lineImgList'

const PortfolioList = (props) => {
  const device = props.device
  const works = props.works

  switch (device) {
    case 'desktop':
      const desktopLine = divideWorks(works, 3)
      return <section className={container}>
        <div className={child}><LineImgList device={device} works={desktopLine[0]} /></div>
        <div className={child}><LineImgList device={device} works={desktopLine[1]} /></div>
        <div className={child}><LineImgList device={device} works={desktopLine[2]} /></div>
      </section>
    case 'tablet':
      const tabletLine = divideWorks(works, 2)
      return <section className={container}>
        <div className={child}><LineImgList device={device} works={tabletLine[0]} /></div>
        <div className={child}><LineImgList device={device} works={tabletLine[1]} /></div>
      </section>
    default:
      return <section className={container}>
        <div className={child}><LineImgList device={device} works={works} /></div>
      </section>
  }
}

export default PortfolioList

function divideWorks (works, lineCount) {
  let w = [[], [], []].slice(0, lineCount)
  let count = [0, 0, 0].slice(0, lineCount)

  for(const v of works) {
    const minLine = count.indexOf(Math.min(...count)) 

    count[minLine] += v.imgHeight
    w[minLine].push(v)
  }

  return w
}