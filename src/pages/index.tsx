import React from 'react'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  return <div>nasustim.com</div>
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
