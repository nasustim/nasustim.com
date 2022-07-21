import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

const style = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;

  // children
  & > * {
    width: 100%;
    height: 100%;

    @media (min-width: 780px) {
      width: 780px;
    }
  }
`

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => <div css={style}>{children}</div>
export default Layout
