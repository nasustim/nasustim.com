import React, {useState} from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import {container} from './style.module.scss'
import {detectDevice} from '../resolver'
import {defaultWindowWidth} from '../constant'
import PortfolioList from '../organisms/portfolioList'

import path from 'path'

const Index = (props) => {
  const { data } = props

  const size = typeof window === 'undefined' ? defaultWindowWidth : window.innerWidth
  const [device, changeDevice] = useState(detectDevice(size))

  if(typeof window !== 'undefined'){
    window.onresize = () => { // @ToDo 時間待ちを実装
      //const id = setTimeout(() => { 
        changeDevice(
          detectDevice(window.innerWidth)
        )
      //}, 200)
    }
  }

  const toLayout = Object.assign({}, 
    data.site.siteMetadata, {
      currentPath: data.sitePage.path,
      title: 'home',
      device
    })

  
  const works = data.allMarkdownRemark.edges.map(({node}) => ({
    title: node.frontmatter.title,
    linkUri: path.join('/works/', node.frontmatter.pageid),
    imgSrc: node.frontmatter.headimg.childImageSharp.resolutions.src,
    imgHeight: node.frontmatter.headimg.childImageSharp.resolutions.height
  }))

  return <div className={container}>
    <Layout {...toLayout}>
      <PortfolioList device={device} works={works} />
    </Layout>
  </div>
}


export default Index

export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "works"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
