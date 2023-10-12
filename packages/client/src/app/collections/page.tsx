"use client";
import { clsx } from "clsx";

import Clock from "@/components/clock/clock";
import { CollectionListItem } from "@/components/collection/CollectionListItem";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { getCollections } from "@/network/getCollections";

export default async function Collections() {
  const collections = await getCollections();
  return (
    <>
      {/*TODO sort out to a layout file*/}
      <Wallpaper />
      <Clock />
      <h1>Link csoportok</h1>
      <main className={clsx("flex min-h-screen flex-col")}>
        {collections.map((collection) => (
          <CollectionListItem collection={collection} key={collection.id} />
        ))}
      </main>
    </>
  );
}
