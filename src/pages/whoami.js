import React, {useState} from "react"
import { graphql } from "gatsby"

import Layout from '../layout'

import {container} from './style.module.scss'

import {detectDevice} from '../resolver'
import {defaultWindowWidth} from '../constant'

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

  return <div className={container}>
    <Layout {...toLayout}>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  </div>
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