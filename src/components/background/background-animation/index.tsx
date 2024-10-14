import { joinStr } from '@/util/string'
import { FC } from 'react'

type Props = {
  fullScreen?: boolean
}

export const BackgroundAnimation: FC<Props> = ({ fullScreen }) => {
  return <div className={joinStr(fullScreen ? 'w-screen h-screen' : '')}></div>
}
