"use client";
import Clock from "@/components/clock/clock";
import CollectionsContainer from "@/components/collection/CollectionsContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { DummyCollections } from "@/mocks/collection.mock";

export default async function Collections() {
  //const collections = await getCollections();
  return (
    <main className="min-h-screen">
      <Wallpaper />
      <Clock />
      <h1>Kollekciók</h1>
      <CollectionsContainer collections={DummyCollections} />
      <CollectionsContainer collections={DummyCollections} />
      <CollectionsContainer collections={DummyCollections} />
    </main>
  );
}
