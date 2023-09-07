'use client'

import { redirect } from 'next/navigation'

export default function FormalImg() {
  // 古いドキュメントから`https://nasustim.com/static/profile_formal.webp`を参照していることがあるためリダイレクトする
  redirect('/static/profile_formal.webp')
}
