import { clsx } from "clsx";

import { CollectionListItem } from "@/components/collection/CollectionListItem";
import { Collection as CollectionEntity } from "@/types/collection.type";

interface Props {
  collections: CollectionEntity[];
}
export default function CollectionsContainer({ collections }: Props) {
  return (
    <main className={clsx("flex flex-wrap justify-center p-4")}>
      {collections.map((collection) => (
        <CollectionListItem collection={collection} key={collection.id} />
      ))}
    </main>
  );
}
