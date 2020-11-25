import '../../styles/index.scss'

import React, { Fragment } from 'react'
import Head from 'next/head'

import { StyleFunctions, MAX_TABLET_WIDTH } from '../constants'

type Props = {
  title: string
  description: string
  updatedDate: string
  pageId: string
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <div className='layout'>
        <Head>
          <title>aaaa</title>
        </Head>
        {props.children}
      </div>
      <style jsx>{`
        .layout {
          width: ${MAX_TABLET_WIDTH};
          height: 100vh;

          ${StyleFunctions.MOBILE_SIZE} {
            width: 100%;
            overflow-x: hidden;
          }
          ${StyleFunctions.TABLET_SIZE} {
            width: 100%;
            overflow-x: hidden;
          }
        }
      `}</style>
      <style jsx global>{`
        // なぜかstyles/index.scssに移動させると効いてない
        html,
        body,
        body > div#__next {
          width: 100%;
          height: 100vh;
        }
        div#__next {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </Fragment>
  )
}

export default Layout
