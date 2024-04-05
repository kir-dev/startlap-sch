import { LinkWithVisitsEntity } from '@/types/link.type'

export async function getTrendingLinks(): Promise<LinkWithVisitsEntity[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/links/trending`, { next: { revalidate: 300 } })
    return await response.json()
  } catch (e) {
    console.error(e)
  }
  return []
}
