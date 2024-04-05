import useSWR from "swr";

import { axiosGetFetcher } from "@/lib/fetchers";
import { UserProfile } from "@/types/user.type";

export function useProfile() {
  return useSWR<UserProfile>("/api/profile", axiosGetFetcher<UserProfile>);
}
