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
            {
              period: '2021/03 - current',
              content: ['mixi inc. (Shibuya, Tokyo)'],
            },
            {
              period: '2020/04 - 2021/03',
              content: ['Mobile Factory (Shinagawa, Tokyo)'],
            },
            {
              period: '2019/03 - 2019/10',
              content: ['Hakbee Lanka (Nagoya, Aichi, Japan)', '→ Part Time'],
            },
            {
              period: '2018/12 - current',
              content: ['freelance developer'],
            },
          ]}
        />
      </div>
      <div className={style.page_inner}>
        <Section
          title={'Educational Experience'}
          article={[
            {
              period: '2017/04 - 2020/03',
              content: ['Institute of Advanced Media Arts and Sciences', '→ Master of Arts(Media Creation)'],
            },
            {
              period: '2013/04 - 2017/03',
              content: ['Polytechnic Collage Gifu(Electronics and Informatics)'],
            },
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
        <table>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon icon={faUser} />
              </td>
              <td>Software Engineer, Creator</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faLocationDot} />
              </td>
              <td>Tokyo, Japan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
)

// Section
type SectionProps = {
  title: string
  article: Array<{
    period: string
    content: Array<string>
  }>
}
const Section: React.VFC<SectionProps> = ({ title, article }) => (
  <div className={style.section_container}>
    <h2>{title}</h2>
    <table>
      <tbody>
        {article.map((a, i) => (
          <tr key={`table-line--${i}`}>
            <td>{a.period}</td>
            <td>
              {a.content.reduce((prev, current) => {
                if (!prev) return <>{current}</>

                return (
                  <>
                    {prev}
                    <br />
                    {current}
                  </>
                )
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
