import { LinkMock } from "@/mocks/link.mock";
import { GetLinksDto } from "@/types/link.type";

export async function getLinks(): Promise<GetLinksDto> {
  return Promise.resolve([LinkMock]);
}
