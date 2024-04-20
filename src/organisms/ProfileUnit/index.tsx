import { type FC } from 'react'
import { Facebook, GitHub, Keybase, Blog } from '@/components/icons/Products'
import Button from '@/components/buttons'
import { H1En } from '@/components/texts/H1/En'
import Link from '@/components/texts/Link'
import { PEn } from '@/components/texts/Plain/En'
import { joinStr } from '@/util/string'
import IMAGE_profile from '@public/static/profile_400x400.jpg'
import Image from 'next/image'

const snsIconSize = 32

const _transition = (to: string) => {
  window.open(to, '_blank')
}

export const ProfileUnit: FC = () => (
  <div
    className={joinStr(
      'flex flex-col w-full items-start gap-9', // mobile
      'tablet:gap-20 tablet:flex-row', // tablet
      'desktop:gap-20 desktop:flex-row', // desktop
    )}>
    <div className={joinStr('flex items-center justify-center')}>
      <Image src={IMAGE_profile} width={142} height={142} alt='Portrait' className='rounded-lg' />
    </div>
    <div className={'flex flex-col gap-3 justify-center w-64'}>
      <H1En>Mitsuhiro HIBINO</H1En>
      <PEn>
        I am a software engineer based in Tokyo, Japan.
        <br />
        Currently, I work in the betting division at <Link href={'https://mixi.co.jp'}>MIXI inc</Link>, as a client
        developer.
      </PEn>
      <div className='flex flex-row w-full gap-5'>
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
      </div>
    </div>
  </div>
)
