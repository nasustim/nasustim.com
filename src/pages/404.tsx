import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layout'

import { NotFoundPageQuery } from '../types/graphql-type'

interface Props {
  data: NotFoundPageQuery
}

const NotFound: React.FC<Props> = (props) => {
  const { data } = props

  const toLayout = Object.assign({}, data.site.siteMetadata, {
    currentPath: data.sitePage.path,
    title: '404 Not Found',
  })

  return (
    <Layout {...toLayout}>
      <Wrapper>
        <h1>404 Not Found</h1>
        <p>
          <Link to={'/'}>Top Page →</Link>
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 12px 0;

  h1 {
    text-align: center;
  }
  p {
    text-align: right;
  }
`

export default NotFound

export const pageQuery = graphql`
  query NotFoundPage {
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
