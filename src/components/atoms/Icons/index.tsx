import React from 'react'

import style from './index.module.scss'

import type { IconType } from 'react-icons'
import { AiFillGithub, AiFillFacebook } from 'react-icons/ai'
import { FaKeybase } from 'react-icons/fa'

interface Props {
  size: number
}

interface IconContainerProps extends Props {
  Icon: IconType
}
const IconContainer: React.FC<IconContainerProps> = ({ Icon, size }) => {
  return (
    <div className={style.icon} style={{ fontSize: `${size}px` }}>
      <Icon />
    </div>
  )
}

export const GitHub: React.FC<Props> = (props) => <IconContainer {...props} Icon={AiFillGithub} />
export const Facebook: React.FC<Props> = (props) => <IconContainer {...props} Icon={AiFillFacebook} />
export const Keybase: React.FC<Props> = (props) => <IconContainer {...props} Icon={FaKeybase} />
