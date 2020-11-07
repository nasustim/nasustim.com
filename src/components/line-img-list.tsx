import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import TopImg from '../components/top-img'

import { Sizes } from '../style/constants'

const LineImgList = ({ works }) => (
  <Wrapper>
    {works.map((work) => (
      <section key={`line-sec--${work.linkUri}`}>
        <Link className={'link'} to={work.linkUri} key={`link--${work.linkUri}`}>
          <TopImg imgSrc={work.imgSrc} key={`top-img--${work.linkUri}`} title={work.title} />
        </Link>
      </section>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 1.3px);
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: ${Sizes.MAX_TABLET_SIZE}) {
    width: 100%;
  }
  section {
    position: relative;
    display: flex;
    width: 100%;
    margin: 1.3px 0;
    padding: 0;
    @media screen and (max-width: ${Sizes.MAX_TABLET_SIZE}) {
      margin: 1px 0;
    }
    .link {
      box-shadow: none;
      text-decoration: none;
    }
  }
`

export default LineImgList
