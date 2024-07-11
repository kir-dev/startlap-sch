import useSWR from 'swr'

import api from '@/network/apiSetup'
import { LinkWithVisitsEntity } from '@/types/link.type'

const fetcher = (url: string) => api.get(url).then(res => res.data)
export function useFavLinks() {
  return useSWR<LinkWithVisitsEntity[]>(`/user/favorites`, fetcher)
}
