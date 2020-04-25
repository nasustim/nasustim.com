import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

export const Line = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    text-decoration: none;
  }
`

export const CardContainer = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const Link = styled(GatsbyLink)`
  box-shadow: none;
`