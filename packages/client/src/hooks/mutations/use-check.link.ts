import axios from 'axios'
import useSWRMutation from 'swr/mutation'

export function useCheckLink() {
  return useSWRMutation('check-link', async (_, { arg }: { arg: string | undefined }) => {
    if (!arg) return false
    try {
      const res = await axios.head(arg)
      return res.status === 200
    } catch {
      return false
    }
  })
}
