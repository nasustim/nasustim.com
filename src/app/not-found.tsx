'use client'
import Template from '@/components/templates/error'

function Page() {
  const error = new Error('404 Not Found')
  return <Template error={error} />
}

export default Page
