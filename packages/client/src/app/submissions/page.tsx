import clsx from 'clsx'
import Link from 'next/link'

import SubmissionCard from '@/components/submission/SubmissionCard'
import { getOwnSubmissions } from '@/network/getOwnSubmissions'

export default async function Submissions() {
  const submissions = await getOwnSubmissions()
  return (
    <main className={clsx('flex flex-col items-center justify-center bg-slate-100')}>
      {submissions.map(submission => (
        <SubmissionCard submission={submission} key={submission.id} />
      ))}
      <Link className='text-blue-500' href='/'>
        Főoldal
      </Link>
    </main>
  )
}
