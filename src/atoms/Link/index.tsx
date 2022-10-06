import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

const style = css`
  text-decoration: underline;
  color: rgb(63, 0, 255);
  font-weight: 570;

  &:hover {
    color: rgb(95, 158, 160);
  }
`

interface Props {
  children: ReactNode
  to: string
  isInternal?: boolean
}

const Link: React.FC<Props> = (props) => (
  <a href={props.to} css={style} target={props.isInternal ? '' : '_blank'}>
    {props.children}
  </a>
)
export default Link
