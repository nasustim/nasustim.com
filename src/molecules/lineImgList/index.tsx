import React from 'react'
import {Link} from 'gatsby'

import TopImg from '../../atoms/topImg'

import {line, cardContainer, anchor} from './style.module.scss'

const LineImgList = (props) => {
  return <div className={`${line}`}>{
    props.works.map(work => (
      <section key={`line-sec--${work.linkUri}`} className={`${cardContainer}`}>
        <Link className={anchor} to={work.linkUri} key={`link--${work.linkUri}`}>
          <TopImg imgSrc={work.imgSrc} device={props.device} key={`top-img--${work.linkUri}`} title={work.title} />
        </Link>
      </section>
    ))
  } </div>
}

export default LineImgList