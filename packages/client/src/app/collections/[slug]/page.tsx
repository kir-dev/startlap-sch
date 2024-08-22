import AddLinkCombobox from '@/components/collection/AddLinkCombobox'
import CollectionLinksContainer from '@/components/links/CollectionLinksContainer'
import api from '@/network/apiSetup'
import { getProfile } from '@/network/getProfile'
import { Collection } from '@/types/collection.type'

export const dynamic = 'force-dynamic'

export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const profile = await getProfile()

  //const collectionData = await api(`/api/collections/${params.slug}`)
  const fetchData = async () => {
    const response = await api.get<Collection>('/collection/slug/' + params.slug)
    return response.data
  }

  const collectionData = await fetchData()
  const linkIds = collectionData.links.map(link => link.id)
  const editable = Boolean(profile && profile.role === 'ADMIN')
  return (
    <main className='relative'>
      {editable && <AddLinkCombobox collectionId={collectionData.id} linkIds={linkIds} />}
      <CollectionLinksContainer collection={collectionData} editable={editable} />
    </main>
  )
}
