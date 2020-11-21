import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../GlobalStyle'
import { StyleFunctions, MAX_TABLET_WIDTH } from '../constants'

type Props = {
  title: string
  description: string
  updatedDate: string
  pageId: string
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className='layout'>
      {props.children}
      <GlobalStyle />
      <style jsx>{style}</style>
    </div>
  )
}

const style = `
.layout {
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: ${MAX_TABLET_WIDTH};

  ${StyleFunctions.TABLET_SIZE} {
    
  }
}
`

export default Layout
