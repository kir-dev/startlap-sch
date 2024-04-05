import { GetCollectionsDto } from '@/types/collection.type'

import api from './apiSetup'

export async function getCollections(): Promise<GetCollectionsDto> {
  const response = await api('/collection/')
  return response.data
}
