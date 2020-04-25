import styled from 'styled-components'

const pcLogoSize = `calc(10px * 2 + 25px)`
const spLogoSize = `calc(10px * 2 + 15px)`

export const Container = styled.div`
  margin: 15px;
  width: ${({device}) => device === 'desktop' ? pcLogoSize : spLogoSize};

  & > *, & * {
    height: 100%;
    margin: 0;
    padding: 0;

    vertical-align: bottom;
    box-sizing: border-box;
  }
`
export const LogoImg = styled.img`
  margin: 0;
  padding: 0;
`