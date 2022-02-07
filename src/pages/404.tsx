import React from 'react'

type Props = {
  title: string
} & SuperPageProps

const Page: React.VFC<Props> = (props) => <div>404</div>

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

export default Page
