import React from "react"
import { DisplayWrapper, Container, Content } from "./style"

import SEO from "../utils/seo"
import Nav from "../organisms/nav"
import Footer from "../organisms/footer"

import { connect } from 'react-redux'
import * as store from '../flux/store'
import * as reducer from '../flux/reducers'
import * as action from '../flux/actions'

const Layout = (props: Props) => {
  const currentPath =
    typeof window !== "undefined" ? window.location.href : "/top"
  const author = 'Mitsuhiro Hibino'//props.author
  const establishYear = 2010//props.establishYear
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

const mapStateToProps = (state: store.State) => state.app
const mapDispatchToProps = ({dispatch}) => ({
  go: (href: String) => dispatch(action.transit({ href }))
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
