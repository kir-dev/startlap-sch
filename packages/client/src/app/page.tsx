import FavLinksContainer from '@/components/links/favLinksContainer'
import { getFavLinks } from '@/network/getFavLinks'
import { getLinks } from '@/network/getLinks'

export const dynamic = 'force-dynamic'

export default async function Home() {
  // const collections = await getCollections();
  const links = await getLinks()
  const favLinks = await getFavLinks()

  return (
    <main className='overflow-y-hidden'>
      <FavLinksContainer title='Felkapottak' links={links}></FavLinksContainer>
      {favLinks.success && <FavLinksContainer title='Kedvencek' links={favLinks.link}></FavLinksContainer>}
      {/* <Carousel items={DummyCollections} name="Kollekciók" /> */}
    </main>
  )
}
