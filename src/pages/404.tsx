import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import {
  CenteredHeading,
  FullWidthContainer,
  RightAlignedText,
} from "../style"

import { connect } from 'react-redux'
import * as action from '../flux/actions'

import { NotFoundQuery } from '../types/gatsby-graphql';

const mapDispatchToProps = (dispatch: Function) => ({
  dispatch: {
    setLocation: (href: String) => dispatch(action.transit({ href })),
    setTitle: (title: String) => dispatch(action.setCurrentPageTitle({ title }))
  }
})

type Props = ReturnType<typeof mapDispatchToProps> & { data: NotFoundQuery }

const NotFound: React.FC<Props> = props => {
  const { data, dispatch } = props

  dispatch.setLocation('/')
  dispatch.setTitle(`404 Not Found`)

  return (
    <FullWidthContainer>
      <CenteredHeading>404 Not Found</CenteredHeading>
      <RightAlignedText>
        <Link to={"/"}>Top Page →</Link>
      </RightAlignedText>
    </FullWidthContainer>
  )
}

export default connect(() => ({}), mapDispatchToProps)(NotFound)

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        author
        description
        title
        establishYear
      }
    }
    sitePage {
      path
    }
  }
`
