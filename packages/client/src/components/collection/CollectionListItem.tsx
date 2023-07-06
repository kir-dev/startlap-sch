import Image from "next/image";

import { Collection } from "@/types/collection.type";

interface Props {
  collection: Collection;
}

export function CollectionListItem({ collection }: Props) {
  return (
    <div className="relative m-2 flex h-32 w-60 cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-2xl">
      <Image
        className="object-cover object-center"
        width={300}
        height={200}
        alt=""
        src={collection.bannerUrl}
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between bg-black bg-opacity-50 p-5">
        <h2>{collection.name}</h2>
        <p className="self-end opacity-50">{collection.links.length} link</p>
      </div>
    </div>
  );
}
