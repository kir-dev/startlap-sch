import "./sajat.css";

import { Link as LinkEntity } from "backend/src/links/entities/link.entity";
import React from "react";
import Link from "next/link";

interface Props {
  link: LinkEntity;
}

export default function LinkWidget(props: Props) {
  const link = props.link;
  return (
    <>
      <Link href={link.url}>
        <div>
          <img src={link.iconUrl} alt="IKON"></img>
          <h1>{link.title}</h1>
          <h3>{link.description}</h3>
        </div>
      </Link>
    </>
  );
}
