import { type FC } from 'react'
import ProfileImage from '@/components/atoms/ProfileImage'
import { Facebook, GitHub, Keybase, Blog } from '@/components/atoms/Icons/Products'
import Button from '@/components/atoms/Button'
import H1 from '@/components/atoms/Text/H1'
import Link from '@/components/atoms/Text/Link'
import P from '@/components/atoms/Text/Plain'

const imageSize = 144
const snsIconSize = 32

const _transition = (to: string) => {
  window.open(to, '_blank')
}

const HeaderProfile: FC = () => (
  <div className='flex flex-col desktop:flex-row w-full gap-8'>
    <div className='flex shrink desktop:shrink-0 desktop:w-[220px] items-center justify-center'>
      <ProfileImage width={imageSize} height={imageSize} />
    </div>
    <div className={'flex flex-col grow justify-center'}>
      <H1>HIBINO Mitsuhiro</H1>
      <P>
        岐阜県岐阜市出身、都内在住のソフトウェアエンジニア。
        <br />
        現在は
        <Link href={'https://mixi.co.jp'}>株式会社MIXI</Link>
        でベッティングサービスのクライアント開発を担当している。
      </P>
      <div className='flex flex-row w-full mt-4 desktop:mt-2 mb-0'>
        <div className='mr-6'>
          <Button
            buttonName={'GitHub'}
            action={() => {
              _transition('https://github.com/nasustim')
            }}>
            <GitHub size={snsIconSize} isButton={true} />
          </Button>
        </div>
        <div className='mr-6'>
          <Button
            buttonName={'Facebook'}
            action={() => {
              _transition('https://www.facebook.com/mitsuhibino')
            }}>
            <Facebook size={snsIconSize} isButton={true} />
          </Button>
        </div>
        <div className='mr-6'>
          <Button
            buttonName={'Keybase'}
            action={() => {
              _transition('https://keybase.io/nasustim')
            }}>
            <Keybase size={snsIconSize} isButton={true} />
          </Button>
        </div>
        <div className='mr-6'>
          <Button
            buttonName={'Blog'}
            action={() => {
              _transition('https://blog.nasustim.com/')
            }}>
            <Blog size={snsIconSize} isButton={true} />
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default HeaderProfile
