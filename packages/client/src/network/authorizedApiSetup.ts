import axios from "axios";
import { cookies } from "next/headers";

const authorizedApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

authorizedApi.interceptors.request.use((config) => {
  const jwt = cookies().get("jwt");
  config.headers.Authorization = `Bearer ${jwt?.value}`;
  return config;
});

export default authorizedApi;
