import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

const style = css`
  width: 100%;
  height: 100%;

  @media (min-width: 780px) {
    width: 780px;
  }
`

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => <div css={style}>{children}</div>
export default Layout
