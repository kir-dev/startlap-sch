export type Link = {
  id: string
  url: string
  title: string
  slug: string
  description: string
  iconUrl: string
  keywords: string[]
};

export type GetLinksDto = Link[];
