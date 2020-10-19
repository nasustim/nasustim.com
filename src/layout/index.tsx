import React from "react"
import { DisplayWrapper, Container, Content } from "./style"

import SEO from "../utils/seo"
import Nav from "../organisms/nav"
import Footer from "../organisms/footer"

const Layout = props => {
  const currentPath =
    typeof window !== "undefined" ? window.location.href : "/top"
  const author = props.author
  const establishYear = props.establishYear
  const title = props.title
  const device = props.device

  return (
    <DisplayWrapper>
      <Container device={device}>
        <SEO title={title} />
        <Nav currentPath={currentPath} device={device} />
        <Content device={device}>
          {props.children}
          <Footer author={author} establishYear={establishYear} />
        </Content>
      </Container>
    </DisplayWrapper>
  )
}

export default Layout
