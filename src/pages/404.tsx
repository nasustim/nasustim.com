import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import {
  CenteredHeading,
  FullWidthContainer,
  RightAlignedText,
} from "../style"

import { detectDevice } from "../resolver"
import { defaultWindowWidth } from "../constants"

import { connect } from 'react-redux'
import * as store from '../flux/store'
import * as action from '../flux/actions'

import { NotFoundQuery } from '../types/gatsby-graphql';

const mapStateToProps = (state: store.State) => ({ state: state.app })
const mapDispatchToProps = () => ({
  dispatch: {
    setLocation: (href: String) => action.transit({ href }),
    setTitle: (title: String) => action.setCurrentPageTitle({ title })
  }
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { data: NotFoundQuery }

const NotFound: React.FC<Props> = props => {
  const { data, dispatch } = props

  useEffect(() => {
    dispatch.setLocation(data.sitePage.path)
    dispatch.setTitle(`404 Not Found`)
  })

  return (
    <FullWidthContainer>
      <CenteredHeading>404 Not Found</CenteredHeading>
      <RightAlignedText>
        <Link to={"/"}>Top Page →</Link>
      </RightAlignedText>
    </FullWidthContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)

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
