import { notFound } from 'next/navigation'

import SubmissionCard from '@/components/submission/SubmissionCard'
import { getOwnSubmissions } from '@/network/getOwnSubmissions'
import { getProfile } from '@/network/getProfile'

export default async function ProfilePage() {
  const profile = await getProfile()
  const submissions = await getOwnSubmissions()
  if (!profile) return notFound()
  return (
    <main>
      <h1>{profile.firstName} link javaslatai</h1>
      <div className='flex flex-wrap justify-center gap-4 px-4'>
        {submissions.map(submission => (
          <SubmissionCard submission={submission} key={submission.id} />
        ))}
      </div>
    </main>
  )
}
