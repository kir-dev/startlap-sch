"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Clock from "@/components/clock/clock";
import LinkWidget from "@/components/links/LinkWidget";
import Wallpaper from "@/components/wallpaper/wallpaper";

export default function CollectionPage() {
  const [LinksInCollection, setLinksInCollection] = useState([]);
  const searchParams = useSearchParams();
  const fetchData = async () => {
    const id = searchParams.get("id");
    const collection = await axios.get("/api/collection/");
    setLinksInCollection(collection.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      <Wallpaper />
      <Clock />

      {LinksInCollection.map((link, _index) => (
        <LinkWidget key={_index} link={link} />
      ))}
    </main>
  );
}
