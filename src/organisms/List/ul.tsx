import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

const style = css`
  padding-left: 20px;
`

interface Props {
  children: ReactNode
}

const Ul: React.FC<Props> = ({ children }) => <ul css={style}>{children}</ul>
export default Ul
