import LinkWidget from "@/components/links/LinkWidget";
import { Collection } from "@/types/collection.type";
import { clsx } from "clsx";

export default function CollectionListContainer({
  collection,
}: {
  collection: Collection;
}) {
  return (
    <>
      <h1 className="m-2 ml-8"> Kollekció: {collection.name}</h1>
      <div className={clsx("flex flex-wrap justify-start p-4")}>
        {collection.links.map((link, _index) => (
          <LinkWidget key={_index} link={link} />
        ))}
      </div>
    </>
  );
}
