import { clsx } from "clsx";
import { useState } from "react";

import { CollectionListItem } from "@/components/collection/CollectionListItem";
import SearchField from "@/components/ui/SearchField";
import { Collection as CollectionEntity } from "@/types/collection.type";

import { CollectionListItem2 } from "./CollectionListItem2";

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
        collections.filter((cur) =>
          cur.name.toLowerCase().includes(searchPhrase)
        )
      );
    }
  }

  return (
    <>
      <table className="w-full">
        <tbody>
          <tr className="justify-center">
            <td>
              <h1 className="m-2 ml-8">Kollekciók</h1>
            </td>
            <td>
              <SearchField onSubmit={Filter} searchPhrase={""}></SearchField>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={clsx("flex flex-wrap justify-start p-4")}>
        {filteredCollections.map((curCollection) => (
          <CollectionListItem
            collection={curCollection}
            key={curCollection.id}
          />

        ))}
        {filteredCollections.map((curCollection) => (
          <CollectionListItem2
            collection={curCollection}
            key={curCollection.id}
          />

        ))}
      </div>
    </>
  );
}
