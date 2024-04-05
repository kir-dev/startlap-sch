export type LinkEntity = {
  id: string
  url: string
  title: string
  slug: string
  description: string
  iconUrl?: string
  keywords: string[]
  visits?: number
}

export interface LinkWithVisitsEntity extends LinkEntity {
  visits: number
}

export type GetLinksDto = LinkEntity[]
