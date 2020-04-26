import React from 'react'

import { Container, FooterSection } from './style'

const Footer = ({author, establishYear}) =>
  <Container>
    <FooterSection>
      <small>© {author}, {establishYear} - {(new Date).getFullYear()}</small>
    </FooterSection>
  </Container>

export default Footer