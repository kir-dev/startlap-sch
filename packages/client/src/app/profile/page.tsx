import { notFound } from 'next/navigation'

import Submissions from '@/app/submissions/page'
import { getProfile } from '@/network/getProfile'

export default async function ProfilePage() {
  const profile = await getProfile()
  if (!profile) return notFound()
  return (
    <main>
      <h1>{profile.firstName} link javaslatai</h1>
      {await Submissions()}
    </main>
  )
}
