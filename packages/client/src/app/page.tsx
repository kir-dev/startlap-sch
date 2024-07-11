import FavLinksContainer from '@/components/links/FavLinksContainer'
import LinksContainer from '@/components/links/LinksContainer'
import { getLinks } from '@/network/getLinks'
import { getTrendingLinks } from '@/network/getTrendingLinks'

export const dynamic = 'force-dynamic'

export default async function Home() {
  // const collections = await getCollections();
  const links = await getLinks()
  const trendinglinks = await getTrendingLinks()
  /*  const favLinks = useFavLinks()*/

  return (
    <main className='overflow-y-hidden'>
      <LinksContainer title='Felkapottak' links={trendinglinks}></LinksContainer>
      <FavLinksContainer />
      {/* {favLinks.data && <FavLinksContainer title='Kedvencek' links={favLinks.data}></FavLinksContainer>}*/}
      {/* <Carousel items={DummyCollections} name="Kollekciók" /> */}
    </main>
  )
}
