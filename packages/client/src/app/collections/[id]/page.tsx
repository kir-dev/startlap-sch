import axios from "axios";

import Clock from "@/components/clock/clock";
import CollectionLinksContainer from "@/components/links/CollectionLinksContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";

export default async function CollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const fetchData = async () => {
    const response = await axios.get(
      /*process.env["NEXT_PUBLIC_BACKEND_URL"] + */ "https://localhost:3300/collection/" +
        params.id
    );
    console.log(response.data);
    return response.data;
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
