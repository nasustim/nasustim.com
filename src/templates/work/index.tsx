import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Article from "../../organisms/article"

import { connect } from 'react-redux'
import * as store from '../../flux/store'
import * as action from '../../flux/actions'

import { WorkByPageIdQuery } from '../../types/gatsby-graphql';

const mapStateToProps = (state: store.State) => ({state: state.app})
const mapDispatchToProps = () => ({
  dispatch: {
    setLocation: (href: String) => action.transit({ href }),
    setTitle: (title: String) => action.setCurrentPageTitle({ title })
  }
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { data: WorkByPageIdQuery }

const WorkTemplete: React.FC<Props> = ({ data, dispatch, state }) => {
  const { html, frontmatter } = data.markdownRemark

  useEffect(() => {
    dispatch.setLocation(data.sitePage.path)
    dispatch.setTitle(frontmatter.title)
  })

  return <Article device={state.deviceType} dangerouslySetInnerHTML={{ __html: html }} />
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkTemplete)

export const query = graphql`
  query WorkByPageId ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        description
        pageid
        title
      }
    }
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
