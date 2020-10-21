import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Article from "../organisms/article"

import { detectDevice } from "../resolver"
import { defaultWindowWidth } from "../constants"

import { connect } from 'react-redux'
import * as store from '../flux/store'
import * as action from '../flux/actions'

import { WhoAmiQuery } from '../types/gatsby-graphql';

const mapStateToProps = (state: store.State) => ({ state: state.app })
const mapDispatchToProps = () => ({
  dispatch: {
    setLocation: (href: String) => action.transit({ href }),
    setTitle: (title: String) => action.setCurrentPageTitle({ title })
  }
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { data: WhoAmiQuery }

const Whoami: React.FC<Props> = props => {
  const { data, dispatch, state } = props
  const { html } = data.markdownRemark

  useEffect(() => {
    dispatch.setLocation(data.sitePage.path)
    dispatch.setTitle('Who am I')
  })

  return <Article dangerouslySetInnerHTML={{ __html: html }} device={state.deviceType} />
}

export default connect(mapStateToProps, mapDispatchToProps)(Whoami)

export const pageQuery = graphql`
  query WhoAmi {
    markdownRemark(frontmatter: { pageid: { eq: "whoami" } }) {
      html
    }
    site {
      siteMetadata {
        author
        description
        title
        establishYear
        social {
          twitter
        }
      }
    }
    sitePage {
      path
    }
  }
`
