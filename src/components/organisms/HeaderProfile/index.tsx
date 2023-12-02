import { type FC } from 'react'

import style from './index.module.scss'

import ProfileImage from '../../atoms/ProfileImage'
import H1 from '../../atoms/Text/H1'
import P from '../../atoms/Text/Plain'
import Link from '../../atoms/Text/Link'
import Button from '../../atoms/Button'
import ButtonList from '../../molecules/ButtonList'
import { Facebook, GitHub, Keybase, Blog } from '../../atoms/Icons'

const imageSize = 144
const snsIconSize = 32

const _transition = (to: string) => {
  window.open(to, '_blank')
}

const HeaderProfile: FC = () => (
  <div className={style['header-profile']}>
    <div className={style['header-profile__image_container']}>
      <ProfileImage width={imageSize} height={imageSize} />
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
        でベッティングサービスのクライアント開発を担当している。
      </P>
      <ButtonList>
        <Button
          buttonName={'Facebook'}
          action={() => {
            _transition('https://www.facebook.com/mitsuhibino')
          }}>
          <Facebook size={snsIconSize} isButton={true} />
        </Button>
        <Button
          buttonName={'GitHub'}
          action={() => {
            _transition('https://github.com/nasustim')
          }}>
          <GitHub size={snsIconSize} isButton={true} />
        </Button>
        <Button
          buttonName={'Keybase'}
          action={() => {
            _transition('https://keybase.io/nasustim')
          }}>
          <Keybase size={snsIconSize} isButton={true} />
        </Button>
        <Button
          buttonName={'Blog'}
          action={() => {
            _transition('https://blog.nasustim.com/')
          }}>
          <Blog size={snsIconSize} isButton={true} />
        </Button>
      </ButtonList>
    </div>
  </div>
)

export default HeaderProfile
