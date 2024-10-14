'use client'

import { useWindow } from '@/hooks/useWindow'
import { joinStr } from '@/util/string'
import { FC, useEffect } from 'react'
import { useAnimation } from './useAnimation'

type Props = {
  fullScreen?: boolean
}

const ID = 'background-animation'

export const BackgroundAnimation: FC<Props> = ({ fullScreen }) => {
  const { startAnimation } = useAnimation()
  const { innerWidth, innerHeight } = useWindow()

  useEffect(() => {
    startAnimation(innerWidth, innerHeight, ID)
  }, [])

  return <div id={ID} className={joinStr(fullScreen ? 'w-screen h-screen' : '')}></div>
}
