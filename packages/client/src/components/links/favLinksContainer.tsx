"use client";
import { Link as LinkEntity } from "backend/src/links/entities/link.entity";
import { useEffect, useRef } from "react";

import LinkWidget from "@/components/links/LinkWidget";
import { LinkEntity } from "@/types/link.type";

interface Props {
  title: string;
  links: LinkEntity[];
}

export default function FavLinksContainer({ title, links }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (container) {
        container.scrollLeft += event.deltaY * 0.2;
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <div
        className="flex pl-4"
        ref={containerRef}
        style={{ overflowX: "hidden" }}
      >
        {links.map((link) => (
          <div className="w-80" key={link.id}>
            <LinkWidget link={link} />
          </div>
        ))}
      </div>
    </div>
  );
}
