import FavLinksContainer from '@/components/links/favLinksContainer'
import { getLinks } from '@/network/getLinks'

export default async function Home() {
  // const collections = await getCollections();
  const links = await getLinks()
  return (
    <main className='min-h-screen overflow-y-hidden'>
      <h1>StartlapSCH</h1>
      <FavLinksContainer title='Felkapottak' links={links}></FavLinksContainer>
      {/* <Carousel items={DummyCollections} name="Kollekciók" /> */}
    </main>
  )
}
