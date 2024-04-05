import { Submission } from '@/types/submission.type'

import api from './apiSetup'

export async function getAllSubmissions(): Promise<Submission[]> {
  try {
    const response = await api.get('/submissions')
    return response.data
  } catch (e) {
    console.error(e)
    return []
  }
}
