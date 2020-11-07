import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import TopImg from '../components/top-img'

import { sassVariableToValue } from '../utils/style'
import { MAX_TABLET_SIZE } from '../style/constants.scss'

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
  @media screen and (max-width: ${sassVariableToValue(MAX_TABLET_SIZE)}px) {
    width: calc(100% - 2px);
  }
  section {
    position: relative;
    display: flex;
    width: 100%;
    margin: 1.3px 0;
    padding: 0;
    @media screen and (max-width: ${sassVariableToValue(MAX_TABLET_SIZE)}px) {
      margin: 2px 0;
    }
    .link {
      box-shadow: none;
      text-decoration: none;
    }
  }
`

export default LineImgList
