import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Collection } from "@/types/collection.type";

interface Props {
  collection: Collection;
}

export function CollectionListItem({ collection }: Props) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Link
      href={"/collection/" + collection.id}
      className="flex-no-wrap bg-blue relative m-2 inline-block inline flex w-96 flex-col items-center overflow-hidden rounded-xl p-2"
    >
      <div className="-z-1 -mb-3 flex h-6 w-full flex-row items-center rounded-t-xl bg-red-400"></div>
      <Image
        className={`h-40 overflow-hidden rounded-xl bg-${
          imageError ? "black" : "local"
        } `}
        width={400}
        height={200}
        alt=""
        src={collection.bannerUrl}
        onError={handleImageError}
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between p-5 text-white">
        <h2 className="py-2">{collection.name}</h2>
        <p className="self-end">{collection.links.length} link</p>
      </div>
    </Link>
  );
}
