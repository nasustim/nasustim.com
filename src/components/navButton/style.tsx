import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { color } from '../../constants'

export const NavBar = styled.ul`
  height: 100%;
  margin: 0;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${color.BLACK};
  &[data-selected='true'] {
    color: ${color.WHITE};
  }
`
export const List = styled.li`
  display: inline-block;
  margin: 0 0 0 15px;
  padding: 10px 20px;
  transition: all 200ms ease-in-out;

  &[data-selected='true'] {
    background-color: ${color.BLACK};
  }
  &:hover {
    background-color: ${color.TRANSLUCENT_BLACK};
    color: ${color.PRIMARY};
  }

  /* multi device */
  h3 {
    font-size: ${({ device }) => (device === 'desktop' ? 24 : 14)}px;
  }
`
