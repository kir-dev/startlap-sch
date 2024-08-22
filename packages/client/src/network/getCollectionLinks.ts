import { Collection } from '@/types/collection.type'

import api from './apiSetup'

export async function getCollectionLinks(slug: string): Promise<Collection> {
  try {
    const response = await api.get('/collection/slug/' + slug)
    return response.data
  } catch (e) {
    console.error(e)
    return { id: '', bannerUrl: '', slug: '', name: '', links: [] }
  }
}
