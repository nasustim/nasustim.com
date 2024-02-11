import type { FC, ReactNode } from 'react'
import { joinStr } from '@/util/string'

interface Props {
  children: ReactNode
  isCentered?: boolean
}

const Text: FC<Props> = (props) => {
  const isCentered = props.isCentered ? 1 : 0
  return (
    <h1
      className={joinStr(
        'text-primary font-heading text-4xl desktop:text-5xl leading-tight desktop:leading-normal',
        isCentered ? 'text-center' : null,
      )}>
      {props.children}
    </h1>
  )
}

export default Text
