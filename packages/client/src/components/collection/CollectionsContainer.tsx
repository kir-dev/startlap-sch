import { clsx } from "clsx";
import React, { useState } from "react";

import { CollectionListItem } from "@/components/collection/CollectionListItem";
import SearchField from "@/components/ui/SearchField";
import { Collection as CollectionEntity } from "@/types/collection.type";

interface Props {
  collections: CollectionEntity[];
}
export default function CollectionsContainer({ collections }: Props) {
  const [filteredCollections, setFilteredCollection] = useState(collections);

  function Filter(searchPhrase: string) {
    setFilteredCollection(
      collections.filter((cur) => {
        return cur.name.toLowerCase().includes(searchPhrase);
      })
    );
  }

  return (
    <main className={clsx("flex flex-wrap justify-center p-4")}>
      <SearchField onSubmit={Filter} searchTerm={""}></SearchField>
      {filteredCollections.map((curCollection) => (
        <CollectionListItem collection={curCollection} key={curCollection.id} />
      ))}
    </main>
  );
}
