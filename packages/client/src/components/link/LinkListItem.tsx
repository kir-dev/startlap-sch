import Image from "next/image";

import { Link } from "@/types/link.type";

interface Props {
  link: Link;
}

export function LinkListItem({ link }: Props) {
  return (
    <a href={link.url} target="_blank">
      <div className="delay-10 m-2 flex w-60 cursor-pointer items-center overflow-hidden rounded-xl bg-white px-4 py-2 shadow-lg transition hover:scale-110">
        <Image
          className="mr-5 h-10 w-10 object-cover"
          width={40}
          height={40}
          alt=""
          src={link.iconUrl}
        />
        <div className="flex flex-1 flex-col justify-between overflow-hidden">
          <p className="font truncate text-xl">{link.title}</p>
          <p className="truncate opacity-50">{link.url}</p>
        </div>
      </div>
    </a>
  );
}
