import AdminSubmissionCard from '@/components/submission/AdminSubmissionCard'
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
      {submissions.pendingSubmissions.length > 0 && (
        <>
          <h2 className='ml-8'>Bírálatlan</h2>
          <div className='flex flex-wrap justify-center gap-4 px-4'>
            {submissions.pendingSubmissions.map(submission => (
              <AdminSubmissionCard key={submission.id} submission={submission} />
            ))}
          </div>
        </>
      )}
      {submissions.reviewedSubmissions.length > 0 && (
        <>
          <h2 className='ml-8'>Elbírált</h2>
          <div className='flex flex-wrap justify-center gap-4 px-4'>
            {submissions.reviewedSubmissions.map(submission => (
              <AdminSubmissionCard key={submission.id} submission={submission} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
