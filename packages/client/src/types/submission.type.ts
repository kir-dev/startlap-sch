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
  userId: string
}

export type CreateSubmissionDto = Omit<Submission, 'id' | 'userId' | 'adminComment' | 'status' | 'oldLinkId'>
