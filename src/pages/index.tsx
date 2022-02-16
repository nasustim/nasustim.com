import React from 'react'

import TopImage from '../atoms/top-image'
import SnsList from '../organisms/sns-list'

import style from '../styles/pages/index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'

type Props = SuperPageProps

const Page: React.VFC<Props> = () => {
  return (
    <>
      <div className={style.page_inner}>
        <Introduction />
      </div>
      <div className={style.page_inner}>
        <Section
          title={'Job Experience'}
          article={[
            '2021/03 - current: Beauty Tech SaaS Developer (Shibuya, Tokyo)',
            '2020/04 - 2021/03: Mobile Game Developer (Shinagawa, Tokyo)',
            '2018/12 - current: freelance developer',
          ]}
        />
      </div>
      <div className={style.page_inner}>
        <Section
          title={'Educational Experience'}
          article={[
            '2017/04 - 2020/03: Institute of Advanced Media Arts and Sciences (Master of Arts(Media Creation))',
            '2013/04 - 2017/03: Polytechnic Collage Gifu',
          ]}
        />
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
        <SnsList />
        <p>
          <FontAwesomeIcon icon={faUser} /> Software Engineer, Creator
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} /> Software Engineer, Creator
        </p>
      </div>
    </div>
  </>
)

// Section
type SectionProps = {
  title: string
  article: Array<string>
}
const Section: React.VFC<SectionProps> = ({ title, article = [] }) => (
  <div className={style.section_container}>
    <h2>{title}</h2>
    {article.map((text) => (
      <p key={`article-${text}`}>{text}</p>
    ))}
  </div>
)
