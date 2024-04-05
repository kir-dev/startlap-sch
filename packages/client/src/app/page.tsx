import FavLinksContainer from '@/components/links/favLinksContainer'
import { getFavLinks } from '@/network/getFavLinks'
import { getLinks } from '@/network/getLinks'

export default async function Home() {
  // const collections = await getCollections();
  const links = await getLinks()
  const favLinks = await getFavLinks()

  if (favLinks.success == false) {
    return (
      <main className='min-h-screen overflow-y-hidden'>
        <h1>StartlapSCH</h1>
        <FavLinksContainer title='Felkapottak' links={links}></FavLinksContainer>
        {/* <Carousel items={DummyCollections} name="Kollekciók" /> */}
      </main>
    )
  } else {
    return (
      <main className='min-h-screen overflow-y-hidden'>
        <h1>StartlapSCH</h1>
        <FavLinksContainer title='Felkapottak' links={links}></FavLinksContainer>
        <FavLinksContainer title='Kedvencek' links={favLinks.link}></FavLinksContainer>
        {/* <Carousel items={DummyCollections} name="Kollekciók" /> */}
      </main>
    )
  }
}
