import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

interface Props {
  children: ReactNode
}

const style = css`
  font-size: 16px;

  font-family: 'Signika Negative', sans-serif;
`

const PageTitle: React.FC<Props> = ({ children }) => <h2 css={style}>{children}</h2>

export default PageTitle
