import { redirect } from 'next/navigation'

import { CreateCollectionForm } from '@/components/collection/CreateCollectionForm'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getProfile } from '@/network/getProfile'

export default async function CreateCollectionPage() {
  const profile = await getProfile()
  if (!profile) return redirect('/')
  return (
    <main className='container my-5 max-w-2xl'>
      <Card>
        <CardHeader>
          <h1 className='ml-0 mt-0'>Új gyűjtemény</h1>
        </CardHeader>
        <CardContent>
          <CreateCollectionForm />
        </CardContent>
      </Card>
    </main>
  )
}
