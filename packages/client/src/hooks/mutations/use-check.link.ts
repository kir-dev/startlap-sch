import axios from 'axios'
import useSWRMutation from 'swr/mutation'

export function useCheckLink() {
  return useSWRMutation('check-link', async (_, { arg }: { arg: string | undefined }) => {
    if (!arg) return false
    try {
      const res = await axios.post('/api/check-link', arg)
      return Boolean(res.data.success)
    } catch {
      return false
    }
  })
}
