import authorizedApi from '@/network/authorizedApiSetup'

export async function deleteFavorite(id: string) {
  try {
    await authorizedApi.delete('/user/favorites/' + id)
  } catch (e) {
    console.error(e)
  }
}
