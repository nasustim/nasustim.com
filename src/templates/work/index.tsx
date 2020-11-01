import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import { Container } from '../../style'

import Article from '../../containers/article'

import { detectDevice } from '../../utils/resolver'

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
    <Container>
      <Layout {...toLayout}>
        <Article dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </Container>
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
