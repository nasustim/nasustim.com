import React from 'react'

type Props = {
  title: string
} & SuperPageProps

const Page: React.VFC<Props> = (props) => <div>{props.title}</div>

export const getStaticProps = async () => {
  return {
    props: {
      title: 'nasustim.com',
      canonicalPath: '/',
    },
  }
}

export default Page
