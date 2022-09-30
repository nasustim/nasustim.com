import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

const style = css`
  width: 100%;
  height: 100%;
`

const styleInner = css`
  width: 100%;
  height: 100%;

  margin-left: auto;
  margin-right: auto;
  @media (min-width: 780px) {
    width: 780px;
  }
`

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div css={style}>
    <div css={styleInner}>{children}</div>
  </div>
)
export default Layout
