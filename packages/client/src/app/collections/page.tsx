"use client";
import Clock from "@/components/clock/clock";
import CollectionsContainer from "@/components/collection/CollectionsContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";

export default async function Collections() {
  const fetchCollections = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/collection/",
      { cache: "no-store" }
    );
    return response.json();
  };

  const collectionsData = await fetchCollections();

  return (
    <main className="min-h-screen">
      <Wallpaper />
      <Clock />

      <CollectionsContainer collections={collectionsData} />
    </main>
  );
}
