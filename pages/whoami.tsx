import { useEffect } from 'react'
import { useRouter } from 'next/router'

function WhoamiPage() {
  // gatsbyで作成していたときは `/` ページにポートフォリオリストを置いていたが、諸々の都合で `/whoami` をトップページに移動
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  })

  return <div>{`redirecting to toppage`}</div>
}
export default WhoamiPage
