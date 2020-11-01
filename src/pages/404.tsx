import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout"

import {
  Container,
  CenteredHeading,
  FullWidthContainer,
  RightAlignedText,
} from "../style"

import { detectDevice } from "../utils/resolver"
import { defaultWindowWidth } from "../constants"

import { NotFoundPageQuery } from '../types/graphql-type'

interface Props {
  data: NotFoundPageQuery
}

const NotFound: React.FC<Props> = props => {
  const { data } = props

  const size =
    typeof window === "undefined" ? defaultWindowWidth : window.innerWidth
  const [device, changeDevice] = useState(detectDevice(size))

  if (typeof window !== "undefined") {
    window.onresize = () => {
      // @ToDo 時間待ちを実装
      //const id = setTimeout(() => {
      changeDevice(detectDevice(window.innerWidth))
      //}, 200)
    }
  }

  const toLayout = Object.assign({}, data.site.siteMetadata, {
    currentPath: data.sitePage.path,
    title: "404 Not Found",
    device,
  })

  return (
    <Container>
      <Layout {...toLayout}>
        <FullWidthContainer>
          <CenteredHeading>404 Not Found</CenteredHeading>
          <RightAlignedText>
            <Link to={"/"}>Top Page →</Link>
          </RightAlignedText>
        </FullWidthContainer>
      </Layout>
    </Container>
  )
}

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
