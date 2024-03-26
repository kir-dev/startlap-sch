import { fetch } from "next/dist/compiled/@edge-runtime/primitives";

import Clock from "@/components/clock/clock";
import CollectionLinksContainer from "@/components/links/CollectionLinksContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";

export default async function CollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const fetchData = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/collection/" + params.id
    );
    return response.json();
  };

  const collectionData = await fetchData();

  return (
    <main className="min-h-screen">
      <Wallpaper />
      <Clock />

      <CollectionLinksContainer collection={collectionData} />
    </main>
  );
}
