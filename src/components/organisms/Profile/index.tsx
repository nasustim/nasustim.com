import type { FC } from 'react'

import { Image } from '../../atoms/new/Image'

import style from './index.module.scss'
import { P } from 'src/components/atoms/new/Text/P'
import { H1 } from 'src/components/atoms/new/Text/H1'

import { FaFacebook, FaGithub, FaKeybase, FaStickyNote } from 'react-icons/fa'

type Props = {}

export const Profile: FC<Props> = ({}) => {
  return (
    <div className={style.top}>
      <Image src={'https://placehold.jp/124x124.png'} width={124} height={124} alt={'self portrait'} />
      <H1>HIBINO Mitsuhiro</H1>
      <P>Software Enginner / Creator / Internet Poet</P>
      <div className={style['top-list']}>
        <FaFacebook size={44} />
        <FaGithub size={44} />
        <FaKeybase size={44} />
        <FaStickyNote size={44} />
      </div>
    </div>
  )
}
