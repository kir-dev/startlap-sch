import { Submission } from '@/types/submission.type'

import api from './apiSetup'

export async function getOwnSubmissions(): Promise<Submission[]> {
  try {
    const response = await api.get('/submissions/me')
    return response.data
  } catch (e) {
    console.error(e)
    return []
  }
}
