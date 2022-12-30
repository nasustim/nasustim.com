// Note: 現状クライアント側のみで動作させているので、Next.jsの都合で用意している
import React from 'react'
import Template from '../components/templates/error'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => <Template />

export default Page

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        isNoindex: true,
      },
    },
  }
}
