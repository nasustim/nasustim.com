import React, { useEffect } from "react"
import { graphql } from "gatsby"

import PortfolioList from "../organisms/portfolioList"

import { connect } from 'react-redux'
import * as store from '../flux/store'
import * as action from '../flux/actions'

import path from "path"

import { IndexQuery } from '../types/gatsby-graphql'

const mapDispatchToProps = (dispatch: Function) => ({
  dispatch: {
    setLocation: (href: String) => dispatch(action.transit({ href })),
    setTitle: (title: String) => dispatch(action.setCurrentPageTitle({ title })),
    setMetaData: (author: String, establishedYear: Number) => dispatch(action.setMetaData({ author, establishedYear })),
    setDeviceType: () => dispatch(action.updateDeviceCategory()),
  }
})

type Props = ReturnType<typeof mapDispatchToProps> & { data: IndexQuery }

const Index: React.FC<Props> = props => {
  const { data, dispatch } = props

  dispatch.setLocation('/')
  dispatch.setTitle('Top Page')
  dispatch.setMetaData(data.site.siteMetadata.author, data.site.siteMetadata.establishYear)
  dispatch.setDeviceType()

  const works = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    linkUri: path.join("/works/", node.frontmatter.pageid),
    imgSrc: node.frontmatter.headimg.childImageSharp.resolutions.src,
    imgHeight: node.frontmatter.headimg.childImageSharp.resolutions.height,
  }))

  return <PortfolioList works={works} />
}

export default connect(() => ({}), mapDispatchToProps)(Index)

export const pageQuery = graphql`
  query Index {
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
