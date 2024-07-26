import { getCollectionLinks } from '@/network/getCollectionLinks'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  return getCollectionLinks(params.slug)
}
