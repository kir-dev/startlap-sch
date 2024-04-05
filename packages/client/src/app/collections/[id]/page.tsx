import CollectionLinksContainer from "@/components/links/CollectionLinksContainer";
import api from "@/network/apiSetup";

export default async function CollectionPage({ params }: { params: { id: string } }) {
  const fetchData = async () => {
    const response = await api("/collection/" + params.id);
    return response.data;
  };

  const collectionData = await fetchData()

  return (
    <main className="min-h-screen">
      <CollectionLinksContainer collection={collectionData} />
    </main>
  )
}
