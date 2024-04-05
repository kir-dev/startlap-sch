import axios from 'axios'

export async function axiosGetFetcher<T>(url: string): Promise<T> {
  const response = await axios.get(url)
  return response.data
}

export async function axiosPostFetcher<T, U>(url: string, { arg }: { arg: U }): Promise<T> {
  const response = await axios.post(url, arg)
  return response.data
}
export async function axiosPatchFetcher<T, U>(url: string, { arg }: { arg: U }): Promise<T> {
  const response = await axios.patch(url, arg)
  return response.data
}
