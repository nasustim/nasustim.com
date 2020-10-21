import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Article from "../organisms/article"

import { connect } from 'react-redux'
import * as action from '../flux/actions'

import { WhoAmiQuery } from '../types/gatsby-graphql';

const mapDispatchToProps = (dispatch: Fucntion) => ({
  dispatch: {
    setLocation: (href: String) => dispatch(action.transit({ href })),
    setTitle: (title: String) => dispatch(action.setCurrentPageTitle({ title }))
  }
})

type Props = ReturnType<typeof mapDispatchToProps> & { data: WhoAmiQuery }

const Whoami: React.FC<Props> = props => {
  const { data, dispatch } = props
  const { html } = data.markdownRemark

  dispatch.setLocation('/whoami')
  dispatch.setTitle('Who am I')

  return <Article dangerouslySetInnerHTML={{ __html: html }} />
}

export default connect(() => ({}), mapDispatchToProps)(Whoami)

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
