import FavLinksContainer from '@/components/links/favLinksContainer'
import { getTrendingLinks } from '@/network/getTrendingLinks'

export default async function Home() {
  // const collections = await getCollections();
  const links = await getTrendingLinks()
  return (
    <main className='overflow-y-hidden'>
      <FavLinksContainer title='Felkapottak' links={links}></FavLinksContainer>
      {/* <Carousel items={DummyCollections} name="Kollekciók" /> */}
    </main>
  )
}
