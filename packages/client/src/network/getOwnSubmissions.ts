import { Submission } from '@/types/submission.type'

import api from './apiSetup'

export async function getOwnSubmissions() {
  try {
    const response = await api.get('/submissions/me')
    const data: Submission[] = await response.data
    return data
  } catch (e) {
    console.error(e)
    return []
  }
}
