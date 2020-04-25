import styled from 'styled-components'

const pc = 10
const sp = 7

export const Container = styled.article`
  padding-left: ${({device}) => device === 'desktop' ? pc : sp}px;
  padding-right: ${({device}) => device === 'desktop' ? pc : sp}px;
`