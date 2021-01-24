import React from 'react'
import HTMLify from 'components/common/htmlify'

type Props = {
  body: string
  id: string
}

const Bio: React.FC<Props> = ({ body, id }) => {
  return (
    <div id={id} style={{ minHeight: '100vh', margin: '40px auto' }}>
      <HTMLify markdown={body} />
    </div>
  )
}

export default Bio
