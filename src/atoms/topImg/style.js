import styled from 'styled-components'


export const Img = styled.img`

  z-index: 1;

  width: 100%;

  display: flex;

  top: 0;
  left: 0;

  filter: grayscale(100);
  /* enabled 3d rendering for firefox, its bad solution */
  transform: rotate3d(0, 0, 0, 0.0001deg);
  outline: 1px solid transparent;
  transition: all 250ms ease-out;
  will-change: filter, border;
`

export const Figcaption = styled.figcaption`

  width: 100%;

  z-index: 2;
  position: absolute;
  bottom: 0;

  display: flex;
  background-color: rgba(0, 0, 0, 0.36);
  opacity: 0;
  transition: all 200ms ease-in-out;
  will-change: opacity;

  div {
    width: 100%;
    transform: translate3d(0, 47px, 0);
    transition: all 187ms ease-out;
    will-change: transform;
    h1 {
      text-align: center;
      font-weight: bold;
      color: #d4d4d9;
      font-size: ${({device}) => device === 'desktop' ? 20 : 15}px;
    }
  }
`

export const Container = styled.figure`
  top: 0;
  left: 0;
  width: 100%;

  display: relative;

  &, & * {
    vertical-align: bottom;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  &:hover {

    & > img {
      filter: grayscale(0);
    }
    & > figcaption {
      opacity: 100;
      div{
        transform: translate3d(0, 0, 0);
      }
    }
  }
`