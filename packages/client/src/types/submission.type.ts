import { UserProfile } from '@/types/user.type'

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
  createdBy?: UserProfile
}

export type CreateSubmissionDto = Omit<Submission, 'id' | 'userId' | 'adminComment' | 'status' | 'oldLinkId'>
