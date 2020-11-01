import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const pcMargin = 1.3
const spMargin = 2

export const Line = styled.div`
  width: calc(100% - (${({ device }) => (device === 'desktop' ? pcMargin : spMargin)}px) * 2);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    text-decoration: none;
  }

  margin: 0 ${({ device }) => (device === 'desktop' ? pcMargin : spMargin)}px;
`

export const CardContainer = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  margin: ${({ device }) => (device === 'desktop' ? pcMargin : spMargin)}px 0;
  padding: 0;
`

export const Link = styled(GatsbyLink)`
  box-shadow: none;
`
