import React from 'react'
import styled from 'styled-components'
import { Sizes } from '../style/constants.ts'

const Article = ({ dangerouslySetInnerHTML }) => (
  <React.Fragment>
    <article dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    <Style />
  </React.Fragment>
)

export default Article

const Style = styled.article`
  padding-left: 7px;
  padding-right: 7px;
  @media (max-width: ${Sizes.MAX_TABLET_SIZE}) {
    padding-left: 10px;
    padding-right: 10px;
  }
`
