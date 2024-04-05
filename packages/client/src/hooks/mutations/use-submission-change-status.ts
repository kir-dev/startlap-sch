import useSWRMutation from 'swr/mutation'

import { axiosPatchFetcher } from '@/lib/fetchers'
import { Submission } from '@/types/submission.type'

export function useSubmissionChangeStatus() {
  return useSWRMutation('/api/submissions/status', axiosPatchFetcher<Submission, {id:string, approved:boolean}>)
}
