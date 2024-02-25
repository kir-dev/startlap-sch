import { Link as LinkEntity } from "backend/src/links/entities/link.entity";

export async function getLinks(): Promise<LinkEntity[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`);
    const data: LinkEntity[] = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
