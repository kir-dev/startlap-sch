"use client";
import clsx from "clsx";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import LinkWidget from "@/components/ui/LinkWidget";
import { DummyLink } from "@/mocks/links.mock";

export default function Home() {
  const handleClick = (event: object) => {
    console.log("meg klikkalt");
    console.log(event);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className={clsx("text-2xl")}>Hajrá Srácok!</h1>
      <Link className="text-blue-500" href="collections">
        Kollekciók
      </Link>
      <Button variant={"default"} size={"default"} onClick={handleClick}>
        asdfasdfsdf
      </Button>

      <LinkWidget link={DummyLink}></LinkWidget>
    </main>
  );
}
