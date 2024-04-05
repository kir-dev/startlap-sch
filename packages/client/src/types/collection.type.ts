import { LinkEntity } from '@/types/link.type'

export type CollectionPreview = {
  id: string
  bannerUrl: string
  slug: string
  name: string
  links: number
}

export interface Collection extends Omit<CollectionPreview, 'links'> {
  links: LinkEntity[]
}

export type GetCollectionsDto = CollectionPreview[]

export type CreateCollectionDto = Pick<Collection, 'name' | 'slug' | 'bannerUrl'> & {
  linkIds: string[]
}
