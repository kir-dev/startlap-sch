"use client";
import CollectionsContainer from "@/components/collection/CollectionsContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { DummyCollections } from "@/mocks/collection.mock";

export default async function Collections() {
  //const collections = await getCollections();
  return (
    <>
      <Wallpaper />
      {/*<Clock />*/}
      <h1>Link kollekciók</h1>
      <CollectionsContainer collections={DummyCollections} />
    </>
  );
}
