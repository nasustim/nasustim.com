import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  to: string
  isInternal?: boolean
}

const Link: React.FC<Props> = (props) => (
  <a href={props.to} target={props.isInternal ? '' : '_blank'}>
    {props.children}
  </a>
)
export default Link
