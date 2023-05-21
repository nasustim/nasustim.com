import React from 'react'

import style from './index.module.scss'

import Image from '../../atoms/Image/3D'
import H1 from '../../atoms/Text/H1'
import P from '../../atoms/Text/Plain'
import Link from '../../atoms/Text/Link'
import Button from '../../atoms/Button'
import ButtonList from '../../molecules/ButtonList'
import { Facebook, GitHub, Keybase, Blog } from '../../atoms/Icons'

const imageSize = 200
const snsIconSize = 32

const HeaderProfile: React.FC = () => {
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
          現在は
          <Link
            href={{
              protocol: 'https',
              host: 'mixi.co.jp',
              pathname: '/',
            }}>
            株式会社MIXI
          </Link>
          で美容サロン予約サービスのサーバサイド, インフラ開発を担当している。
        </P>
        <ButtonList>
          <Button
            buttonName={'Facebook'}
            action={() => {
              transition('https://www.facebook.com/mitsuhibino')
            }}>
            <Facebook size={snsIconSize} isButton={true} />
          </Button>
          <Button
            buttonName={'GitHub'}
            action={() => {
              transition('https://github.com/nasustim')
            }}>
            <GitHub size={snsIconSize} isButton={true} />
          </Button>
          <Button
            buttonName={'Keybase'}
            action={() => {
              transition('https://keybase.io/nasustim')
            }}>
            <Keybase size={snsIconSize} isButton={true} />
          </Button>
          <Button
            buttonName={'Blog'}
            action={() => {
              transition('https://blog.nasustim.com/')
            }}>
            <Blog size={snsIconSize} isButton={true} />
          </Button>
        </ButtonList>
      </div>
    </div>
  )
}
export default HeaderProfile
