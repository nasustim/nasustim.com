import React from "react"
import { graphql } from "gatsby"
import { DisplayWrapper, Container, Content } from "./style"

import SEO from "../utils/seo"
import Nav from "../organisms/nav"
import Footer from "../organisms/footer"

import { connect } from 'react-redux'
import * as store from '../flux/store'

const mapStateToProps = (state: store.State) => ({ state: state.app })

type Props = ReturnType<typeof mapStateToProps>

const Layout: React.FC<Props> = props => {
  const currentPath = props.state.location
  const author = props.state.metaData.author
  const establishYear = props.state.metaData.establishedYear
  const title = props.state.title
  const device = props.state.deviceType

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

export default connect(mapStateToProps)(Layout)