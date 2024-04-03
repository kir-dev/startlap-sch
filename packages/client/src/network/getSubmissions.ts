import { cookies } from 'next/headers'

import { Submission } from '@/types/submission.type'

export async function getOwnSubmissions() {
  const cookieStore = cookies()
  console.log(cookieStore.get('jwt'))
  console.log(cookieStore.getAll())
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/submissions/me`, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${cookieStore.get('jwt')?.value}`,
      },
    })
    const data: Submission[] = await response.json()
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}
