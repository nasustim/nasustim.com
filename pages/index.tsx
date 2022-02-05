import React from 'react'

import Image from '../components/atoms/image'
import { SocialIcon } from 'react-social-icons'

import styles from './index.module.scss'

const socialServiceUrls = [
  'https://github.com/nasustim',
  'https://facebook.com/mitsuhibino',
  'https://instagram.com/nasustim',
  'https://keybase.io/nasustim',
]

type Props = SuperPageProps

const Page: React.VFC<Props> = (props) => {
  return (
    <>
      <div className={styles.page_inner}>
        <h1 className='heading'>Mitsuhiro Hibino</h1>
        <Image src={'/images/me.jpg'} size={{ width: 100, height: 100 }} />
      </div>
      <div className={styles.page_inner}>
        <ul className='text'>
          <li>location: Tokyo</li>
          <li>job: software engineer</li>
          <li>specification: web server-side</li>
        </ul>
      </div>
      <div className={styles.page_inner}>
        <div className={styles.external_profile_list}>
          {socialServiceUrls.map((v) => (
            <SocialIcon url={v} fgColor='transparent' />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      seo: {
        canonicalPath: '/',
        isNoindex: false,
      },
    },
  }
}

export default Page
