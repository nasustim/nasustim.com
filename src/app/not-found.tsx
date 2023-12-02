'use client'

import Template from '@nasustim.com/components/templates/error'

const Page = () => {
  const error = new Error('404 Not Found')
  return <Template error={error} />
}

export default Page
