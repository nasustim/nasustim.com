// 現状クライアント側のみで動作させているので、Next.jsの都合で用意している
import React from 'react'

type Props = SuperPageProps

const Page: React.VFC<Props> = (props) => <p>error</p>

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        isNoindex: true,
      },
    },
  }
}

export default Page
