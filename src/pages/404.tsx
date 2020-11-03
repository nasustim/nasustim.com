import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layout'

import { detectDevice } from '../utils/resolver'

import { NotFoundPageQuery } from '../types/graphql-type'

interface Props {
  data: NotFoundPageQuery
}

const NotFound: React.FC<Props> = (props) => {
  const { data } = props

  const size = window?.innerWidth || 980 // defaultWindowWidth
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
    title: '404 Not Found',
    device,
  })

  return (
    <Layout {...toLayout}>
      <div>
        <h1>404 Not Found</h1>
        <p>
          <Link to={'/'}>Top Page →</Link>
        </p>
      </div>
      <Style />
    </Layout>
  )
}

const Style = () => (
  <style jsx>{`
    div {
      width: 100%;
      margin: 12px 0;

      h1 {
        @extend div;
        text-align: center;
      }
      p {
        @extend div;
        text-align: right;
      }
    }
  `}</style>
)

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
