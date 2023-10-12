import { CollectionMock1, CollectionMock2 } from "@/mocks/collection.mock";
import { GetCollectionsDto } from "@/types/collection.type";

export async function getCollections(): Promise<GetCollectionsDto> {
  // const res = await axios.get<GetCollectionsDto>("");
  // return res.data;
  return Promise.resolve([
    CollectionMock1,
    CollectionMock2,
    CollectionMock1,
    CollectionMock2,
    CollectionMock1,
    CollectionMock2,
    CollectionMock1,
    CollectionMock2,
  ]);
}
