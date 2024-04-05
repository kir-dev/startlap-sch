import { notFound } from 'next/navigation'

import { getProfile } from '@/network/getProfile'

export default async function ProfilePage() {
  const profile = await getProfile()
  if (!profile) return notFound()
  return (
    <main>
      <h1>Profile</h1>
      <p>{profile.firstName}</p>
      {profile.submissions.map(submission => (
        <div key={submission.id}>
          <h2>{submission.title}</h2>
          <p>{submission.status}</p>
        </div>
      ))}
    </main>
  )
}
