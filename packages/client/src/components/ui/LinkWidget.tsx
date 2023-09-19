import "../../app/globals.css";

import { Link as LinkEntity } from "backend/src/links/entities/link.entity";
import Link from "next/link";
import React from "react";

interface Props {
  link: LinkEntity;
}

export default function LinkWidget(props: Props) {
  const link = props.link;
  return (
    <Link
      href={link.url}
      className="flex-no-wrap bg-blue inline-block flex w-80 flex-col items-center overflow-hidden rounded-xl p-2"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="-z-1 -mb-3 flex h-8 w-full flex-row items-center rounded-t-xl"
        src={
          "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
        }
        alt="felso sav"
      />

      <div className="h-35 w-full overflow-hidden rounded-xl bg-white p-2">
        <div className=" flex flex-grow flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ml-0 aspect-square h-1/6 w-1/6 flex-none"
            src={link.iconUrl}
            alt="ikon"
            width={100}
            height={100}
          />
          <div className="ml-2 h-2/3 flex-grow overflow-hidden">
            <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-3xl">
              {link.title}
            </h2>
            <h4 className="text-xs">{link.url}</h4>
          </div>
        </div>
        <div className="">
          <p className="mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap  text-base">
            {link.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
