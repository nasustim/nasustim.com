import React, { type ReactNode } from 'react'
import { css } from '@emotion/react'

const style = css`
  padding: 0;
  margin: 24px 0 0;
`

interface Props {
  children: ReactNode
}

const Section: React.FC<Props> = ({ children }) => <section css={style}>{children}</section>

export default Section
