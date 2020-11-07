import React from 'react'
import styled from 'styled-components'
import { MAX_TABLET_SIZE, COLOR_WHITE } from '../style/constants.scss'

const TopImg = ({ imgSrc, title }) => (
  <Wrapper>
    <img className={'img'} src={imgSrc} alt={title} key={`img--${title}`} />
    <figcaption className={'figcaption'}>
      <div>
        <h1>{title}</h1>
      </div>
    </figcaption>
  </Wrapper>
)

export default TopImg

const Wrapper = styled.figure`
top: 0;
left: 0;
width: 100%;

display: relative;

&,
& * {
  vertical-align: bottom;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

&:hover {
  & > img {
    filter: grayscale(0);
  }
  & > figcaption > div {
    transform: translate3d(0, 0, 0);
  }
}
}

.img {
z-index: 1;
width: 100%;
display: flex;
top: 0;
left: 0;
filter: grayscale(100);
transform: rotate3d(0, 0, 0, 0.0001deg);
outline: 1px solid transparent;
transition: all 250ms ease-out;
will-change: filter, border;
}

.figcaption {
width: 100%;
z-index: 2;
position: absolute;
bottom: 0;
display: flex;
overflow: hidden;

div {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.36);
  transform: translate3d(0, 200px, 0);
  transition: all 240ms ease-in-out;
  will-change: transform;
  h1 {
    text-align: center;
    color: ${COLOR_WHITE};
    font-size: 20px;
    line-height: 1.2;
    margin: 10px;

    @media screen and (max-width: ${MAX_TABLET_SIZE}) {
      font-size: 15px;
    }
  }
}`
