export type Collection = {
  id: string;
  iconUrl: string;
  bannerUrl: string;
  slug: string;
  name: string;
  links: string[];
};

export type GetCollectionsDto = Collection[];
