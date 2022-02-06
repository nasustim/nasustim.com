import React from 'react'

import TopImage from '../atoms/top-image'
import style from '../styles/pages/index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'

type Props = SuperPageProps

const Page: React.VFC<Props> = (props) => {
  return (
    <>
      <div className={style.page_inner}>
        <h1 className={style.title}>Mitsuhiro Hibino</h1>
      </div>
      <div className={style.page_inner}>
        <div className={style.profile}>
          <div className={style.profile_image}>
            <TopImage src={'/images/me.jpg'} />
          </div>
          <div className={style.profile_text}>
            <p>
              <FontAwesomeIcon icon={faUser} /> Software Engineer, Creator
            </p>
            <p>
              <FontAwesomeIcon icon={faBuilding} /> mixi inc., freelancer
            </p>
          </div>
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
