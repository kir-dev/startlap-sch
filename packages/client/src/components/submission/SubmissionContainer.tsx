import { Submission } from '@/types/submission.type'

export default function SubmissionContainer({ submission }: { submission: Submission }) {
  return (
    <div>
      <h1>{submission.title}</h1>
      <p>{submission.description}</p>
      <p>{submission.status}</p>
    </div>
  )
}
