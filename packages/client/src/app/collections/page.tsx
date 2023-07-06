import { clsx } from "clsx";
import Link from "next/link";

import { CollectionListItem } from "@/components/collection/CollectionListItem";
import { getCollections } from "@/network/getCollections";

export default async function Collections() {
  const collections = await getCollections();
  return (
    <main
      className={clsx("flex min-h-screen flex-col items-center justify-center")}
    >
      {collections.map((collection) => (
        <CollectionListItem collection={collection} key={collection.id} />
      ))}
      <Link className="text-blue-500" href="/">
        Főoldal
      </Link>
    </main>
  );
}
