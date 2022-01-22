import React from 'react'

type Props = {
  title: string
}

const Page: React.VFC<Props> = (props) => <div>{props.title}</div>

export const getStaticProps = async () => {
  return {
    props: {
      title: '404 Not Found',
    },
  }
}

export default Page
