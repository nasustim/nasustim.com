import React from 'react'

import { Container, FooterSection } from './style'

const Footer = ({author, establishYear}) =>
  <Container>
    <FooterSection>
      <small>© {author}, {establishYear} -</small>
    </FooterSection>
  </Container>

export default Footer