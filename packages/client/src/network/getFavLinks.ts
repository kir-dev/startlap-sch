import { LinkWithVisitsEntity } from '@/types/link.type'

import api from './apiSetup'

export async function getFavLinks(): Promise<{ link: LinkWithVisitsEntity[]; success: boolean }> {
  try {
    const { data: link, status } = await api.get('/user/favorites')
    const success = status !== 401
    return { link, success }
  } catch (e) {
    console.error(e)
    return { link: [], success: false }
  }
}
