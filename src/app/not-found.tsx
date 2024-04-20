'use client'

import Template from '@/templates/error'

function Page() {
  const error = new Error('404 Not Found')
  return <Template error={error} />
}

export default Page
