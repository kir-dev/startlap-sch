import { Link as LinkEntity } from "backend/src/links/entities/link.entity";

import LinkWidget from "@/components/ui/LinkWidget";

interface Props {
  links: LinkEntity[];
}

export default function favLinksContainer(props: Props) {
  const links = props.links;
  return (
    <div className="flex-r flex-col">
      <h1>Favorite Links</h1>
      <div className="h-50 flex flex-row">
        {links.map((link) => (
          <LinkWidget link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
}
