import React, { useEffect } from "react"
import { graphql } from "gatsby"

import PortfolioList from "../organisms/portfolioList"

import { connect } from 'react-redux'
import * as store from '../flux/store'
import * as action from '../flux/actions'

import path from "path"

import { IndexQuery } from '../types/gatsby-graphql'

const mapStateToProps = (state: store.State) => ({ state: state.app })
const mapDispatchToProps = () => ({
  dispatch: {
    setLocation: (href: String) => action.transit({ href }),
    setTitle: (title: String) => action.setCurrentPageTitle({ title }),
    setMetaData: (author: String, establishedYear: Number) => action.setMetaData({ author, establishedYear }),
  }
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { data: IndexQuery }

const Index: React.FC<Props> = props => {
  const { data, state, dispatch } = props

  useEffect(() => {
    dispatch.setLocation(data.sitePage.path)
    dispatch.setTitle('Top Page')
    dispatch.setMetaData(data.site.siteMetadata.author, data.site.siteMetadata.establishYear)
  })

  const works = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    linkUri: path.join("/works/", node.frontmatter.pageid),
    imgSrc: node.frontmatter.headimg.childImageSharp.resolutions.src,
    imgHeight: node.frontmatter.headimg.childImageSharp.resolutions.height,
  }))

  return <PortfolioList device={state.deviceType} works={works} />
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

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
