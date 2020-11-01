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
    <Container device={device}>
      <SEO title={title} />
      <Nav currentPath={currentPath} device={device} />
      <Content device={device}>
        {props.children}
        <Footer author={author} establishYear={establishYear} />
      </Content>
    </Container>
  )
}

export default Layout
