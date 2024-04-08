import useSWRMutation from 'swr/mutation'

import { axiosPatchFetcher } from '@/lib/fetchers'
import { LinkEntity } from '@/types/link.type'
import { Submission } from '@/types/submission.type'

export function useSubmissionChangeStatus() {
  return useSWRMutation('/api/submissions/status', axiosPatchFetcher<Submission | LinkEntity, { id: string; approved: boolean; comment?: string }>)
}
