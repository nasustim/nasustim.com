import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'

import { Container } from '../style'
import Article from '../containers/article'

import { detectDevice } from '../utils/resolver'
import { defaultWindowWidth } from '../constants'

import { WhoAmIPageQuery } from '../types/graphql-type'

interface Props {
  data: WhoAmIPageQuery
}

const Whoami: React.FC<Props> = (props) => {
  const { data } = props

  const { html } = data.markdownRemark

  const size = window?.innerWidth || 980
  const [device, changeDevice] = useState(detectDevice(size))

  if (typeof window !== 'undefined') {
    window.onresize = () => {
      // @ToDo 時間待ちを実装
      //const id = setTimeout(() => {
      changeDevice(detectDevice(window.innerWidth))
      //}, 200)
    }
  }

  const toLayout = Object.assign({}, data.site.siteMetadata, {
    currentPath: data.sitePage.path,
    title: 'Who am I',
    device,
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
