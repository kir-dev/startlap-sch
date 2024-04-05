import authorizedApi from '@/network/authorizedApiSetup'
import { UserProfile } from '@/types/user.type'

export async function getProfile(): Promise<UserProfile | null> {
  try {
    const response = await authorizedApi.get<UserProfile>('/user/profile')
    return response.data
  } catch (e) {
    return null
  }
}
