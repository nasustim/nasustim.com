import React from 'react'

import style from './index.module.scss'

import type { IconType } from 'react-icons'
import { AiFillGithub, AiFillFacebook } from 'react-icons/ai'
import { FaKeybase } from 'react-icons/fa'
import { MdArticle } from 'react-icons/md'

interface Props {
  size: number
  isButton?: boolean
}

interface IconContainerProps extends Props {
  Icon: IconType
}
const IconContainer: React.FC<IconContainerProps> = ({ Icon, size, isButton = false }) => {
  return (
    <div className={style.icon} style={{ fontSize: `${size}px` }} data-is-button={isButton ? 1 : 0}>
      <Icon />
    </div>
  )
}

export const GitHub: React.FC<Props> = (props) => <IconContainer {...props} Icon={AiFillGithub} />
export const Facebook: React.FC<Props> = (props) => <IconContainer {...props} Icon={AiFillFacebook} />
export const Keybase: React.FC<Props> = (props) => <IconContainer {...props} Icon={FaKeybase} />
export const Blog: React.FC<Props> = (props) => <IconContainer {...props} Icon={MdArticle} />
