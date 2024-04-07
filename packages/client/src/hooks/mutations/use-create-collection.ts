import useSWRMutation from 'swr/mutation'

import { axiosPostFetcher } from '@/lib/fetchers'
import { Collection, CreateCollectionDto } from '@/types/collection.type'

export function useCreateCollection() {
  return useSWRMutation('/api/collections', axiosPostFetcher<Collection, CreateCollectionDto>)
}
