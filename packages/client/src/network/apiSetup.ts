import axios from 'axios'
import { cookies } from 'next/headers'
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
api.interceptors.request.use(async config => {
  const token = cookies().get('jwt')?.value
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})
export default api
