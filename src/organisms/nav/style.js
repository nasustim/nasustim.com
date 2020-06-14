import styled from "styled-components"

export const Container = styled.header`
  * {
    box-shadow: none;
  }

  z-index: 10;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin: 0 0 5px 0;
  animation: gone 130ms ease-out 0s 1 normal forwards running;
  @keyframes gone {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }

  position: fixed;

  background-color: rgba($color: #ffffff, $alpha: 0.6);

  height: ${({ device }) => (device === "desktop" ? 110 : 60)}px;
`
