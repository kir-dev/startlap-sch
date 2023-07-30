"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { CollectionListItem } from "@/components/collection/CollectionListItem";
import { Button } from "@/components/ui/button";
import { Collection } from "@/types/collection.type";

interface Props {
  items: Collection[];
  name: string;
}

export function Carousel({ items, name }: Props) {
  const slider = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    slider.current?.addEventListener("scroll", calculateButtonState);
  }, []);
  const calculateButtonState = () => {
    if (slider.current) {
      setShowLeft(slider.current.scrollLeft > 0);
      setShowRight(
        slider.current.scrollLeft <
          slider.current.scrollWidth - slider.current.clientWidth
      );
    }
  };
  const slideLeft = () => {
    if (slider.current) {
      slider.current.scrollLeft -= slider.current.clientWidth;
    }
  };

  const slideRight = () => {
    if (slider.current) {
      slider.current.scrollLeft += slider.current.clientWidth;
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold">{name}</h1>

      <div className="relative flex w-full items-center">
        <div
          ref={slider}
          className="no-scrollbar flex w-full overflow-x-scroll scroll-smooth"
        >
          {items.map((item) => (
            <div key={item.id}>
              <CollectionListItem collection={item} className={"shadow-none"} />
            </div>
          ))}
        </div>
        {showLeft && (
          <Button
            className="absolute left-0 text-white transition duration-300 hover:scale-150"
            onClick={slideLeft}
          >
            <ChevronLeft className="h-12 w-12" />
          </Button>
        )}
        {showRight && (
          <Button
            className="absolute right-0 text-white transition duration-300 hover:scale-150"
            onClick={slideRight}
          >
            <ChevronRight className="h-12 w-12" />
          </Button>
        )}
      </div>
    </>
  );
}
