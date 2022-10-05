import React, { ReactNode } from 'react'
import { css } from '@emotion/react'

interface Props {
  children: ReactNode
}

const style = css`
  line-height: 1.5;
  font-size: 14px;
`

const Text: React.FC<Props> = ({ children }) => <p css={style}>{children}</p>

export default Text
