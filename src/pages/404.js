import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Layout from '../layout'

import {container, center, fullWidth, right } from './style.module.scss'

import {detectDevice} from '../resolver'
import {defaultWindowWidth} from '../constants'

const NotFound = (props) => {
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
      title: '404 Not Found',
      device
    })

  return <div className={container}>
    <Layout {...toLayout}>
      <div className={fullWidth}>
        <h1 className={`${fullWidth} ${center}`}>404 Not Found</h1>
        <p className={`${fullWidth} ${right}`}><Link to={'/'}>Top Page →</Link></p>
      </div>
    </Layout>
  </div>
}


export default NotFound

export const pageQuery = graphql`
  query {
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