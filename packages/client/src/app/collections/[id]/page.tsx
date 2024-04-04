import Clock from "@/components/clock/clock";
import CollectionLinksContainer from "@/components/links/CollectionLinksContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";
import api from "@/network/apiSetup";

export default async function CollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const fetchData = async () => {
    const response = await api("/collection/" + params.id
    );
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
