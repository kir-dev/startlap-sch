import authorizedApi from '@/network/authorizedApiSetup'

export async function addFavorite(id: string) {
  try {
    await authorizedApi.post('/user/favorites/' + id)
  } catch (e) {
    console.error(e)
  }
}
