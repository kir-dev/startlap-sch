
import SubmissionCard from '@/components/submission/SubmissionCard'
import { getOwnSubmissions } from '@/network/getOwnSubmissions'

export const dynamic = 'force-dynamic'

export default async function Submissions() {
  const submissions = await getOwnSubmissions()
  return (
    <main className='flex flex-wrap px-4 justify-center gap-4'>
      {submissions.map(submission => (
        <SubmissionCard submission={submission} key={submission.id} />
      ))}
    </main>
  )
}

