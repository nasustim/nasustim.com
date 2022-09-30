import React from 'react'
import { css } from '@emotion/react'

interface Props {
  text: string
}

const style = css`
  font-size: 22px;
`

const PageTitle: React.FC<Props> = ({ text }) => <h1 css={style}>{text}</h1>

export default PageTitle
