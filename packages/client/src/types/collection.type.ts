import { LinkEntity } from '@/types/link.type'

export type CollectionPreview = {
  id: string
  iconUrl: string
  bannerUrl: string
  slug: string
  name: string
  links: number
}

export interface Collection extends Omit<CollectionPreview, 'links'> {
  links: LinkEntity[]
}

export type GetCollectionsDto = CollectionPreview[]
