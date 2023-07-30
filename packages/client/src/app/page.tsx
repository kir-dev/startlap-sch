import clsx from "clsx";
import Link from "next/link";

import { Carousel } from "@/components/Carousel/Carousel";
import { getCollections } from "@/network/getCollections";

export default async function Home() {
  const collections = await getCollections();
  return (
    <main className="flex min-h-screen flex-col justify-center p-8">
      <h1 className={clsx("text-2xl")}>Hajrá Srácok!</h1>
      <Carousel items={collections} name="Collections1" />
      <Carousel items={collections} name="Collections2" />
      <Link className="text-blue-500" href="collections">
        Kollekciók
      </Link>
      <Link className="text-blue-500" href="links">
        Linkek
      </Link>
    </main>
  );
}
