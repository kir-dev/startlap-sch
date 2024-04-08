import { Submission } from '@/types/submission.type'

import api from './apiSetup'

export async function getAllSubmissions(): Promise<{ pendingSubmissions: Submission[]; reviewedSubmissions: Submission[] }> {
  try {
    const response = await api.get('/submissions')
    const pendingSubmissions: Submission[] = []
    const reviewedSubmissions: Submission[] = []
    const data = response.data
    for (const submission of data) {
      if (submission.status === 'IN_REVIEW') pendingSubmissions.push(submission)
      else reviewedSubmissions.push(submission)
    }
    return { pendingSubmissions, reviewedSubmissions }
  } catch (e) {
    console.error(e)
    return { pendingSubmissions: [], reviewedSubmissions: [] }
  }
}
