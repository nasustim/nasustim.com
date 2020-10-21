import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Article from "../../organisms/article"

import { connect } from 'react-redux'
import * as action from '../../flux/actions'

import { WorkByPageIdQuery } from '../../types/gatsby-graphql';

const mapDispatchToProps = (dispatch: Function) => ({
  dispatch: {
    setLocation: (href: String) => dispatch(action.transit({ href })),
    setTitle: (title: String) => dispatch(action.setCurrentPageTitle({ title }))
  }
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { data: WorkByPageIdQuery }

const WorkTemplete: React.FC<Props> = ({ data, dispatch }) => {
  const { html, frontmatter } = data.markdownRemark

  dispatch.setLocation(data.sitePage.path)
  dispatch.setTitle(frontmatter.title)

  return <Article dangerouslySetInnerHTML={{ __html: html }} />
}

export default connect(() => ({}), mapDispatchToProps)(WorkTemplete)

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
