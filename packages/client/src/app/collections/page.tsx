"use client";
import Clock from "@/components/clock/clock";
import CollectionsContainer from "@/components/collection/CollectionsContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";
import axios from "axios";

export default async function Collections() {
  const fetchCollections = async () => {
    const response = await axios.get(
      process.env["NEXT_PUBLIC_BACKEND_URL"] + "/collection/"
    );
    return response.data;
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
