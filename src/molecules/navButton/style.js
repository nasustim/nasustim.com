import { Link as GatsbyLink} from 'gatsby'
import styled from 'styled-components'

export const NavBar = styled.ul`
  height: 100%;
  margin: 0;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  &[data-selected="true"] {
    color: #ffffff;
  }
  &[data-selected="false"] {
    color: #141414;
  }
`
export const List = styled.li`
  display: inline-block;
  margin: 0 0 0 15px;
  padding: 10px 20px;
  transition: all 200ms ease-in-out;

  &[data-selected="true"] {
    background-color: #141414;
  }
  &:hover {
    color: #474747;
    background-color: #cccccc;
  }

  /* multi device */
  h3 {
    font-size: ${({device}) => device === 'desktop' ? 24 : 14}px;
  }
`