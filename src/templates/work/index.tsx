import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'

import Article from '../../containers/article'

import { WorksPageQuery } from '../../types/graphql-type'

interface Props {
  data: WorksPageQuery
}

const WorkTemplete: React.FC<Props> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  const toLayout = Object.assign({}, data.site.siteMetadata, {
    currentPath: data.sitePage.path,
    title: frontmatter.title,
  })

  return (
    <Layout {...toLayout}>
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default WorkTemplete

export const query = graphql`
  query WorksPage($slug: String!) {
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
