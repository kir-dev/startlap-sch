import LinkWidget from "@/components/links/LinkWidget";
import { Collection } from "@/types/collection.type";

export default function CollectionListContainer({
  collection,
}: {
  collection: Collection;
}) {
  return (
    <>
      <h1>{collection.name}</h1>
      {collection.links.map((link, _index) => (
        <LinkWidget key={_index} link={link} />
      ))}
    </>
  );
}
