import styled from 'styled-components'

const pcLogoSize = `calc(10px * 2 + 24px)`
const spLogoSize = `calc(10px * 2 + 14px)`

export const Container = styled.div`
  margin: 14px;
  width: ${({device}) => device === 'desktop' ? pcLogoSize : spLogoSize};
`

export const LogoImg = styled.img`
  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;
`