import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Collection } from "@/types/collection.type";

interface Props {
  collection: Collection;
}

export function CollectionListItem({ collection }: Props) {
  return (
    <Link
      href={"https://kir-dev.hu"}
      className="flex-no-wrap bg-blue relative inline flex w-96 flex-col items-center overflow-hidden rounded-xl p-2"
    >
      <div className="-z-1 -mb-3 flex h-6 w-full flex-row items-center rounded-t-xl bg-red-400"></div>
      <Image
        className="h-40 overflow-hidden rounded-xl bg-white bg-local"
        width={400}
        height={200}
        alt=""
        src={collection.bannerUrl}
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between p-5 text-white">
        <h2 className="py-2">{collection.name}</h2>
        <p className="self-end">{collection.links.length} link</p>
      </div>
    </Link>
  );
}
