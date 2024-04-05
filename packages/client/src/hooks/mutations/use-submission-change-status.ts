import useSWRMutation from 'swr/mutation'

import { axiosPostFetcher } from '@/lib/fetchers'
import { CreateSubmissionDto, Submission } from '@/types/submission.type'

export function useSubmissionChangeStatus() {
  return useSWRMutation('/api/submissions', axiosPostFetcher<Submission, CreateSubmissionDto>)
}
