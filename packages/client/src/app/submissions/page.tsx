import clsx from 'clsx'
import Link from 'next/link'

import SubmissionContainer from '@/components/submission/SubmissionContainer'
import { getOwnSubmissions } from '@/network/getOwnSubmissions'

export default async function Submissions() {
  const submissions = await getOwnSubmissions()
  return (
    <main className={clsx('flex min-h-screen flex-col items-center justify-center bg-slate-100')}>
      {submissions.map(submission => (
        <SubmissionContainer submission={submission} key={submission.id} />
      ))}
      <Link className='text-blue-500' href='/'>
        Főoldal
      </Link>
    </main>
  )
}
