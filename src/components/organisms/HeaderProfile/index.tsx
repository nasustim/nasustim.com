import React from 'react'
import style from './index.module.scss'

import Image from '../../atoms/Image/3D'
import H1 from '../../atoms/Text/H1'
import P from '../../atoms/Text/Plain'
import Link from '../../atoms/Text/Link'

interface Props {}

const imageSize = 140

const HeaderProfile: React.FC<Props> = () => {
  return (
    <div className={style.headerprofile}>
      <div className={style.headerprofile__image_container}>
        <Image src={'/static/profile_400x400.jpg'} width={imageSize} height={imageSize} />
      </div>
      <div className={style.headerprofile__texts}>
        <H1>HIBINO Mitsuhiro</H1>
        <P>
          岐阜県岐阜市出身、都内在住のソフトウェアエンジニア。
          <br />
          現在は<Link to='https://mixi.co.jp/'>株式会社MIXI</Link>
          で美容サロン予約サービスのサーバサイド, インフラ開発を担当している。
        </P>
      </div>
    </div>
  )
}
export default HeaderProfile
