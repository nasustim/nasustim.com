import React from 'react'

import Image from '../components/atoms/image'

import styles from './index.module.scss'

type Props = SuperPageProps

const Page: React.VFC<Props> = (props) => {
  return (
    <>
      <div className={styles.page_inner}>
        <h1 className='heading'>Mitsuhiro Hibino</h1>
      </div>
      <div className={styles.page_inner}>
        <div style={{ float: 'left', margin: '5px 20px 20px 0' }}>
          <Image src={'/images/me.jpg'} size={{ width: 200, height: 200 }} />
        </div>
        <p className='text'>Under Construction</p>
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
