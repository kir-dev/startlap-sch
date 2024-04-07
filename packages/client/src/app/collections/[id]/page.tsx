import CollectionLinksContainer from '@/components/links/CollectionLinksContainer'
import api from '@/network/apiSetup'

export const dynamic = 'force-dynamic'

export default async function CollectionPage({ params }: { params: { id: string } }) {
  const fetchData = async () => {
    const response = await api('/collection/' + params.id)
    return response.data
  }

  const collectionData = await fetchData()

  return (
    <main>
      <CollectionLinksContainer collection={collectionData} />
    </main>
  )
}
