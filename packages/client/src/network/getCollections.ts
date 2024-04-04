import { Collection } from "@/types/collection.type";

import api from "./apiSetup";

export async function getCollections(): Promise<Collection[]> {
  const response = await api(
    "/collection/");
  const collections:Collection[] =  response.data;
  return collections
}
