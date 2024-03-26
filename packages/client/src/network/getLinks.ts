import { Link as LinkEntity } from "backend/src/links/entities/link.entity";

export async function getLinks(): Promise<LinkEntity[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
