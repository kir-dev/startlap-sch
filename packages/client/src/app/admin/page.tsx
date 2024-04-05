import FavLinksContainer from '@/components/links/favLinksContainer'
import { useProfile } from '@/hooks/queries/use-profile'
import { getAllSubmissions } from '@/network/getAllSubmissions'

export default async function Page() {
  const user = useProfile()
  const submissions = await getAllSubmissions()
  /*if(user.data.)*/
  return (
    <>
      <h1>
        <span className='italic'>zs</span>admin
      </h1>
      <FavLinksContainer title={'A világ összes linje'} links={} />
    </>
  )
}
