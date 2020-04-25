import React, {useState} from "react"
import { graphql } from "gatsby"

import Layout from '../layout'

import { Container } from './style'
import Article from '../organisms/article'

import {detectDevice} from '../resolver'
import {defaultWindowWidth} from '../constants'

const Whoami = (props) => {
  const { data } = props

  const { html } = data.markdownRemark

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
      title: 'Who am I',
      device
    })

  return <Container>
    <Layout {...toLayout}>
      <Article
        dangerouslySetInnerHTML={{ __html: html }}
        device={device}
      />
    </Layout>
  </Container>
}


export default Whoami

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {pageid: {eq: "whoami"}}) {
      html
    }
    site {
      siteMetadata {
        author
        description
        title
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