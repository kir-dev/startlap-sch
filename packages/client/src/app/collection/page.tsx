"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import Clock from "@/components/clock/clock";
import Wallpaper from "@/components/wallpaper/wallpaper";
import CollectionLinksContainer from "@/components/links/CollectionLinksContainer";

export default function CollectionPage() {
  const [collectionData, setCollectionData] = useState();
  const searchParams = useSearchParams();
  const fetchData = async () => {
    const id = searchParams.get("id");
    const collection = await axios.get("/api/collection/");
    setCollectionData(collection.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      <Wallpaper />
      <Clock />

      {collectionData === undefined ? (
        <p>Loading...</p>
      ) : (
        <CollectionLinksContainer collection={collectionData} />
      )}
    </main>
  );
}
