import { type FC } from 'react'
import style from './index.module.scss'
import ProfileImage from '@nasustim.com/components/atoms/ProfileImage'
import { Facebook, GitHub, Keybase, Blog } from '@nasustim.com/components/atoms/Icons'
import Button from '@nasustim.com/components/atoms/Button'
import ButtonList from '@nasustim.com/components/molecules/ButtonList'
import H1 from '@nasustim.com/components/atoms/Text/H1'
import Link from '@nasustim.com/components/atoms/Text/Link'
import P from '@nasustim.com/components/atoms/Text/Plain'

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
          buttonName={'GitHub'}
          action={() => {
            _transition('https://github.com/nasustim')
          }}>
          <GitHub size={snsIconSize} isButton={true} />
        </Button>
        <Button
          buttonName={'Facebook'}
          action={() => {
            _transition('https://www.facebook.com/mitsuhibino')
          }}>
          <Facebook size={snsIconSize} isButton={true} />
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
