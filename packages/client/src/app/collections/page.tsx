import CollectionsContainer from '@/components/collection/CollectionsContainer'
import api from '@/network/apiSetup'

export default async function Collections() {
  const fetchCollections = async () => {
    const response = await api('/collection/')
    return response.data
  }

  const collectionsData = await fetchCollections()

  return (
    <main className='min-h-screen'>
      <CollectionsContainer collections={collectionsData} />
    </main>
  )
}
