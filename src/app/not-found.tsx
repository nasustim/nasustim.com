'use client'

import H1 from '@/components/texts/H1'

const ERROR = new Error('404 Not Found')

function Page() {
  return <H1 isCentered={true}>{ERROR.message}</H1>
}

export default Page
