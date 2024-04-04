import { LinkEntity } from "@/types/link.type";

export type Collection = {
  id: string;
  iconUrl: string;
  bannerUrl: string;
  slug: string;
  name: string;
  links: LinkEntity[];
};

export type GetCollectionsDto = Collection[];
