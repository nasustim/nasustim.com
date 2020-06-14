import React from "react"

import { Container, Img, Figcaption } from "./style.js"

const TopImg = ({ imgSrc, device, title }) => (
  <Container device={device}>
    <Img src={imgSrc} alt={title} key={`img--${title}`} />
    <Figcaption device={device}>
      <div>
        <h1>{title}</h1>
      </div>
    </Figcaption>
  </Container>
)

export default TopImg
