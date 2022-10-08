import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

interface Props {
  children: ReactNode
}

const style = css`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 14px;

  font-family: 'Work Sans', sans-serif;
`

const Text: React.FC<Props> = ({ children }) => <p css={style}>{children}</p>

export default Text
