import { redirect } from 'next/navigation'

import { CreateLinksForm } from '@/components/links/CreateLinksForm'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getProfile } from '@/network/getProfile'

export default async function CreateLinkPage() {
  const profile = await getProfile()
  if (!profile) return redirect('/')
  return (
    <main className='container my-5 max-w-2xl'>
      <Card>
        <CardHeader>
          <h1 className='ml-0 mt-0'>Új link</h1>
        </CardHeader>
        <CardContent>
          <CreateLinksForm />
        </CardContent>
      </Card>
    </main>
  )
}
