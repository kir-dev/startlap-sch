import SubmissionCard from '@/components/submission/SubmissionCard'
import { getAllSubmissions } from '@/network/getAllSubmissions'
import { getProfile } from '@/network/getProfile'

export default async function Page() {
  const user = await getProfile()
  const submissions = await getAllSubmissions()

  return (
    <>
      <h1>
        <span className='italic'>zs</span>admin
      </h1>
      <div className='flex flex-wrap px-4 justify-center gap-4'>
        {submissions.map(submission => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
      </div>
    </>
  )
}
