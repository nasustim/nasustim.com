import React from 'react'

import Image from '../components/atoms/image'

type Props = SuperPageProps

const Page: React.VFC<Props> = (props) => {
  return (
    <React.Fragment>
      <h1 className='heading'>Mitsuhiro Hibino</h1>
      <Image src={'/images/me.jpg'} size={{ width: 100, height: 100 }} />
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
