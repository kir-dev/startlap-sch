import { LinkWithVisitsEntity } from '@/types/link.type'

export async function getLinks(): Promise<LinkWithVisitsEntity[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, { cache: 'no-store' })
    const data: LinkWithVisitsEntity[] = await response.json()
    return data
  } catch (e) {
    console.error(e)
    return []
  }
}
