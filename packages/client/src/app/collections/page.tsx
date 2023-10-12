"use client";
import { clsx } from "clsx";

import { CollectionListItem } from "@/components/collection/CollectionListItem";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { getCollections } from "@/network/getCollections";

export default async function Collections() {
  const collections = await getCollections();
  return (
    <>
      <Wallpaper />
      {/*<Clock />*/}
      <h1>Link kollekciók</h1>
      <main className={clsx("flex flex-wrap justify-evenly p-4")}>
        {collections.map((collection) => (
          <CollectionListItem collection={collection} key={collection.id} />
        ))}
      </main>
    </>
  );
}
