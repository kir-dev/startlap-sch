import SubmissionCard from '@/components/submission/AdminSubmissionCard'
import { getAllSubmissions } from '@/network/getAllSubmissions'

export default async function Page() {
  //const user = await getProfile()
  const submissions = await getAllSubmissions()
  //console.log(user)
  // if(user?.role !== 'ADMIN' && user?.role !== 'MODERATOR') {
  //   return redirect('/')
  // }
  return (
    <>
      <h1>
        <span className='italic'>zs</span>admin
      </h1>
      <div className='flex flex-wrap justify-center gap-4 px-4'>
        {submissions.map(submission => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
      </div>
    </>
  )
}
