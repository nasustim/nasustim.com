import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import { Container } from '../../style'

import Article from '../../containers/article'

import { detectDevice } from '../../utils/resolver'
import { defaultWindowWidth } from '../../constants'

import { WorksPageQuery } from '../../types/graphql-type'

interface Props {
  data: WorksPageQuery
}

const WorkTemplete: React.FC<Props> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  const size = typeof window === 'undefined' ? defaultWindowWidth : window.innerWidth
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
    title: frontmatter.title,
    device,
  })

  return (
    <Container>
      <Layout {...toLayout}>
        <Article device={device} dangerouslySetInnerHTML={{ __html: html }} />
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
