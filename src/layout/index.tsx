import React from 'react'
import { Container, Content } from './style'

import SEO from '../utils/seo'
import Nav from '../containers/nav'
import Footer from '../containers/footer'

const Layout = (props) => {
  const currentPath = typeof window !== 'undefined' ? window.location.href : '/top'
  const author = props.author
  const establishYear = props.establishYear
  const title = props.title
  const device = props.device

  return (
    <div>
      <SEO title={title} />
      <Nav currentPath={currentPath} />
      <main>
        {props.children}
        <Footer author={author} establishYear={establishYear} />
      </main>
      <Style />
    </div>
  )
}

export default Layout

const Style = () => (
  <style jsx>{`
    div {
      left: auto;
      right: auto;
      margin: 0 auto;
      max-width: $default-page-width;
      height: 100%;
      width: 100%;
      @media screen and (max-width: $max-tablet-size) {
        width: 980px;
      }
      main {
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 980px;
        position: absolute;
        z-index: 5;
        top: 120px; // 110px + 10px
        @media screen and (max-width: $max-tablet-size) {
          top: 70px; // 60px + 10px
        }
      }
    }
  `}</style>
)
