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
    if (searchPhrase == "") {
      setFilteredCollection(collections);
    } else {
      setFilteredCollection(
        collections.filter((cur) => {
          return cur.name.toLowerCase().includes(searchPhrase);
        })
      );
    }
  }

  return (
    <>
      <table className="w-full">
        <tr className="justify-center">
          <td>
            <h1 className="m-2 ml-8">Kollekciók</h1>
          </td>
          <td>
            <SearchField onSubmit={Filter} searchTerm={""}></SearchField>
          </td>
        </tr>
        <tr></tr>
      </table>
      <div className={clsx("flex flex-wrap justify-start p-4")}>
        {filteredCollections.map((curCollection) => (
          <CollectionListItem
            collection={curCollection}
            key={curCollection.id}
          />
        ))}
      </div>
    </>
  );
}
