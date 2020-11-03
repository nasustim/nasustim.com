import React from 'react'
import styled from 'styled-components'

import SEO from '../utils/seo'
import Nav from '../containers/nav'
import Footer from '../containers/footer'

import { MAX_TABLET_SIZE, DEFAULT_PAGE_WIDTH } from '../style/constants.scss'

const Layout = (props) => {
  const currentPath = typeof window !== 'undefined' ? window.location.href : '/top'
  const author = props.author
  const establishYear = props.establishYear
  const title = props.title

  return (
    <Wrapper>
      <SEO title={title} />
      <Nav currentPath={currentPath} />
      <main>
        {props.children}
        <Footer author={author} establishYear={establishYear} />
      </main>
    </Wrapper>
  )
}

export default Layout

console.log(MAX_TABLET_SIZE)

const Wrapper = styled.div`
  left: auto;
  right: auto;
  margin: 0 auto;
  max-width: ${DEFAULT_PAGE_WIDTH};
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${MAX_TABLET_SIZE}) {
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
    @media screen and (max-width: ${MAX_TABLET_SIZE}) {
      top: 70px; // 60px + 10px
    }
  }
`
