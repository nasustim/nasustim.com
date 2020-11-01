import React from 'react'

import TopImg from '../../components/topImg'

import { Line, CardContainer, Link } from './style'

const LineImgList = (props) => (
  <Line device={props.device}>
    {props.works.map((work) => (
      <CardContainer device={props.device} key={`line-sec--${work.linkUri}`}>
        <Link to={work.linkUri} key={`link--${work.linkUri}`}>
          <TopImg imgSrc={work.imgSrc} device={props.device} key={`top-img--${work.linkUri}`} title={work.title} />
        </Link>
      </CardContainer>
    ))}
  </Line>
)

export default LineImgList
