import React, {useState} from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import {container} from '../../pages/style.module.scss'

import Article from '../../organisms/article'

import {detectDevice} from '../../resolver'
import {defaultWindowWidth} from '../../constant'

const WorkTemplete = ({data}) => {
  const {html, frontmatter} = data.markdownRemark

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
      title: frontmatter.title,
      device
    })

  return (
    <div className={container}>
      <Layout {...toLayout}>
        <Article
          device={device}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </div>
  )
}

export default WorkTemplete

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