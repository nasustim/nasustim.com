import React from 'react'

import Image from '../components/atoms/image'

import styles from './index.module.scss'

type Props = SuperPageProps

const Page: React.VFC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className={styles.page_inner}>
        <h1 className='heading'>Mitsuhiro Hibino</h1>
      </div>
      <div className={styles.page_inner}>
        <Image src={'/images/me.jpg'} size={{ width: 100, height: 100 }} />
      </div>
      <div className={styles.page_inner}>
        <ul className='text'>
          <li>location: Tokyo</li>
          <li>job: software engineer</li>
          <ul>
            <li>specification: web server-side</li>
          </ul>
          <li>
            links: <a href='https://facebook.com/mitsuhibino'>Facebook</a>,{' '}
            <a href='https://facebook.com/mitsuhibino'>Github</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
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
