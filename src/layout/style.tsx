import styled from 'styled-components'

export const Container = styled.div`
  left: auto;
  right: auto;
  margin: 0 auto;

  max-width: 980px;
  height: 100%;

  width: ${({ device }) => (device === 'desktop' ? '100%' : '980px')};
`

export const Content = styled.main`
  padding: 0;
  margin: 0;

  width: 100%;
  max-width: 980px;

  position: absolute;

  z-index: 5;

  ${({ device }) => (device === 'desktop' ? `top: calc(110px + 10px)` : `top: calc(60px + 10px)`)};
`
