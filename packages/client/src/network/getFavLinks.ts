import { LinkWithVisitsEntity } from '@/types/link.type'

import api from './apiSetup'

export async function getFavLinks(): Promise<{ link: LinkWithVisitsEntity[]; success: boolean }> {
  try {
    const response = await api.get(`/user/favorites`)
    const rawdata = await response.data
    let success = true
    if (response.status == 401) {
      success = false
    }
    const data = { link: rawdata, success: success }
    console.log(data)
    return data
  } catch (e) {
    console.error(e)
    return { link: [], success: false }
  }
}
