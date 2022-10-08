import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

interface Props {
  children: ReactNode
}

const style = css`
  font-size: 22px;

  font-family: 'Signika Negative', sans-serif;
`

const PageTitle: React.FC<Props> = ({ children }) => <h1 css={style}>{children}</h1>

export default PageTitle
