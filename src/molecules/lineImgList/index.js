import React from 'react'

import TopImg from '../../atoms/topImg'

import { Line, CardContainer, Link } from './style.js'

const LineImgList = (props) => <Line>{
    props.works.map(work => (
      <CardContainer key={`line-sec--${work.linkUri}`}>
        <Link to={work.linkUri} key={`link--${work.linkUri}`}>
          <TopImg imgSrc={work.imgSrc} device={props.device} key={`top-img--${work.linkUri}`} title={work.title} />
        </Link>
      </CardContainer>
    ))
  }</Line>

export default LineImgList