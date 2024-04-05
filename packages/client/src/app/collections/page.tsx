import CollectionsContainer from '@/components/collection/CollectionsContainer'
import { getCollections } from '@/network/getCollections'

export default async function Collections() {
  const collectionsData = await getCollections()

  return (
    <main>
      <CollectionsContainer collections={collectionsData} />
    </main>
  )
}
