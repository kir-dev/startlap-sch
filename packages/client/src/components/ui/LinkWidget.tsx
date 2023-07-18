import "./sajat.css";

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
      className="flex-no-wrap bg-blue bl  inline-block flex flex-col rounded-xl p-4"
    >
      <img
        className="-z-1 -mb-3 flex h-8 w-full flex-row rounded-t-xl object-cover"
        src={
          "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
        }
        alt="felso sav"
      ></img>

      <div className="rounded-xl bg-blue-100 p-2">
        <div className=" flex flex-grow flex-row">
          <img
            className="aspect-w-1 ml-0 h-auto w-1/6 flex-none"
            src={link.iconUrl}
            alt="ikon"
          ></img>
          <div className="flix-grow ml-2">
            <h1 className="text-3xl">{link.title}</h1>
            <h4 className="text-xs">{link.url}</h4>
          </div>
        </div>
        <div className="">
          <h3 className="mt-2 text-base">{link.description}</h3>
        </div>
      </div>
    </Link>
  );
}
