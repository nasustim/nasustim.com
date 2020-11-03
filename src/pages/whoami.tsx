import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'

import Article from '../containers/article'

import { WhoAmIPageQuery } from '../types/graphql-type'

interface Props {
  data: WhoAmIPageQuery
}

const Whoami: React.FC<Props> = (props) => {
  const { data } = props

  const { html } = data.markdownRemark

  const toLayout = Object.assign({}, data.site.siteMetadata, {
    currentPath: data.sitePage.path,
    title: 'Who am I',
  })

  return (
    <Layout {...toLayout}>
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Whoami

export const pageQuery = graphql`
  query WhoAmIPage {
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
