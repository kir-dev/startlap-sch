"use client";
import Clock from "@/components/clock/clock";
import CollectionsContainer from "@/components/collection/CollectionsContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { DummyCollections } from "@/mocks/collection.mock";

export default function Collections() {
  return (
    <main className="min-h-screen">
      <Wallpaper />
      <Clock />

      <CollectionsContainer collections={DummyCollections} />
    </main>
  );
}
