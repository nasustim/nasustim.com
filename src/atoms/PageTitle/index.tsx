import React from 'react'

interface Props {
  text: string
}

const PageTitle: React.FC<Props> = ({ text }) => <h1>{text}</h1>

export default PageTitle
