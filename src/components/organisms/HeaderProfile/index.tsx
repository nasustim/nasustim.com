import React from 'react'

import style from './index.module.scss'

import Image from '../../atoms/Image/3D'
import H1 from '../../atoms/Text/H1'
import P from '../../atoms/Text/Plain'
import Link from '../../atoms/Text/Link'
import Button from '../../atoms/Button'
import ButtonList from '../../molecules/ButtonList'
import { Facebook, GitHub, Keybase } from '../../atoms/Icons'

interface Props {}

const imageSize = 150

const HeaderProfile: React.FC<Props> = () => {
  const transition = (to: string) => {
    window.open(to, '_blank')
  }

  return (
    <div className={style['header-profile']}>
      <div className={style['header-profile__image_container']}>
        <Image src={'/static/profile_400x400.jpg'} width={imageSize} height={imageSize} />
      </div>
      <div className={style['header-profile__texts']}>
        <H1>HIBINO Mitsuhiro</H1>
        <P>
          岐阜県岐阜市出身、都内在住のソフトウェアエンジニア。
          <br />
          現在は<Link to='https://mixi.co.jp/'>株式会社MIXI</Link>
          で美容サロン予約サービスのサーバサイド, インフラ開発を担当している。
        </P>
        <ButtonList>
          <Button
            action={() => {
              transition('https://www.facebook.com/mitsuhibino')
            }}
          >
            <Facebook size={28} isButton={true} />
          </Button>
          <Button
            action={() => {
              transition('https://github.com/nasustim')
            }}
          >
            <GitHub size={28} isButton={true} />
          </Button>
          <Button
            action={() => {
              transition('https://keybase.io/nasustim')
            }}
          >
            <Keybase size={28} isButton={true} />
          </Button>
        </ButtonList>
      </div>
    </div>
  )
}
export default HeaderProfile
