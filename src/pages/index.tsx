import React from 'react'

import TopImage from '../atoms/top-image'
import style from '../styles/pages/index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'

type Props = SuperPageProps

const Page: React.VFC<Props> = () => {
  return (
    <>
      <div className={style.page_inner}>
        <Introduction />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        canonicalPath: '/',
        isNoindex: false,
      },
    },
  }
}

export default Page

// Contents

const Introduction: React.VFC = () => (
  <>
    <div className={style.introduction__profile}>
      <div className={style.introduction__profile_image}>
        <TopImage src={'/images/me.jpg'} />
      </div>
      <div className={style.introduction__profile_text}>
        <h1>Mitsuhiro Hibino</h1>
        <p>
          <FontAwesomeIcon icon={faUser} /> Software Engineer, Creator
        </p>
        <p>
          <FontAwesomeIcon icon={faBuilding} /> web service company, freelancer
        </p>
      </div>
    </div>
  </>
)
