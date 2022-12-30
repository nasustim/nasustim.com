import React from 'react'

import Template from '../components/templates/error'

type Props = {
  title: string
} & SuperPageProps

const Page: React.FC<Props> = (props) => {
  const error = new Error('404 Not Found')
  return <Template error={error} />
}

export default Page

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        canonicalPath: '/404',
        isNoindex: true,
        title: '404 Not Found',
      },
    },
  }
}
