import { clsx } from "clsx";
import Link from "next/link";

import { LinkListItem } from "@/components/link/LinkListItem";
import { getLinks } from "@/network/getLinks";

export default async function Links() {
  const links = await getLinks();
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-center bg-slate-100"
      )}
    >
      {links.map((link) => (
        <LinkListItem link={link} key={link.id} />
      ))}
      <Link className="text-blue-500" href="/">
        Főoldal
      </Link>
    </main>
  );
}
