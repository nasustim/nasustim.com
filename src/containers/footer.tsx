import React from 'react'
import styled from 'styled-components'

const Footer = ({ author, establishYear }) => (
  <Wrapper>
    <footer>
      <small>
        © {author}, {establishYear} - {new Date().getFullYear()}
      </small>
    </footer>
  </Wrapper>
)

export default Footer

const Wrapper = styled.section`
  width: 100%;
  margin: 48px 0 12px;
  footer {
    width: 100%;
    text-align: center;
    font-style: oblique;
  }
`
