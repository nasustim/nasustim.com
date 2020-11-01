import React, { useReducer, useEffect } from 'react'
import { Container, Content } from './style'

import SEO from '../utils/seo'
import Nav from '../containers/nav'
import Footer from '../containers/footer'

import reducer, { initialState, ACTION_TYPES } from '../flux/reducer'

const Layout = (props) => {
  //const [state, dispatch] = useReducer(reducer, initialState)
  //const { isComponentMounted } = state


  const currentPath = typeof window !== 'undefined' ? window.location.href : '/top'

  const author = props.author
  const establishYear = props.establishYear
  const title = props.title
  const device = props.device

  /*useEffect(() => {
    if ( false === isComponentMounted ) {
      dispatch({
        type: ACTION_TYPES.LOADED,
        data: {
          location: currentPath
        }
      })
    }
  }, [isComponentMounted])*/

  console.log('rerender')

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
