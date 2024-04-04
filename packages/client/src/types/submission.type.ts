export type Submission = {
  id: string
  oldLinkId?: string
  title: string
  url: string
  slug: string
  description: string
  iconUrl?: string
  keywords: string[]
  adminComment: string
  status: 'IN_REVIEW' | 'APPROVED' | 'DECLINED'
}
