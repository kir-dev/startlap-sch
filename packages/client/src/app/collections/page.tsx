import CollectionsContainer from '@/components/collection/CollectionsContainer'
import { getCollections } from '@/network/getCollections'

export const dynamic = 'force-dynamic'

export default async function Collections() {
  const collectionsData = await getCollections()

  return (
    <main>
      <CollectionsContainer collections={collectionsData} />
    </main>
  )
}
