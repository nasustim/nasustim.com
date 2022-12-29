import React from 'react'
import Index from '../components/templates/index'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  return <Index />
}

export default Page

export const getStaticProps = () => ({
  props: {
    meta: {
      canonicalPath: '/',
      isNoindex: false,
    },
  },
})
