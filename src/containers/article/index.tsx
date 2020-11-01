import React from "react"

import { Container } from "./style"

const Article = ({ device, dangerouslySetInnerHTML }) => (
  <Container
    device={device}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
  />
)

export default Article
