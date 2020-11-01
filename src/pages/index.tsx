import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { Container } from '../style'
import { detectDevice } from '../utils/resolver'
import PortfolioList from '../containers/portfolioList'

import path from 'path'

import { TopPageQuery } from '../types/graphql-type'

interface Props {
  data: TopPageQuery
}

const Index: React.FC<Props> = (props) => {
  const { data } = props

  const toLayout = Object.assign({}, data.site.siteMetadata, {
    currentPath: data.sitePage.path,
    title: 'home',
  })

  const works = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    linkUri: path.join('/works/', node.frontmatter.pageid),
    imgSrc: node.frontmatter.headimg.childImageSharp.resolutions.src,
    imgHeight: node.frontmatter.headimg.childImageSharp.resolutions.height,
  }))

  return (
    <Container>
      <Layout {...toLayout}>
        <PortfolioList works={works} />
      </Layout>
    </Container>
  )
}

export default Index

export const pageQuery = graphql`
  query TopPage {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "works" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            pageid
            title
            headimg {
              childImageSharp {
                resolutions(jpegQuality: 85, width: 490) {
                  src
                  height
                }
              }
            }
          }
        }
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
