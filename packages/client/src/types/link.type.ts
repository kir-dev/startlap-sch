export type LinkEntity = {
  id: string
  url: string
  title: string
  slug: string
  description: string
  iconUrl?: string
  keywords: string[]
  isFavorite: boolean
}

export interface LinkWithVisitsEntity extends LinkEntity {
  visits: number
}

export type GetLinksDto = LinkEntity[]
