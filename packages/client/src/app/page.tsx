"use client";
import LinkWidget from "@/components/ui/LinkWidget";
import { DummyLink, DummyLink2 } from "@/mocks/links.mock";

export default function Home() {
  const handleClick = (event: object) => {
    console.log("meg klikkalt");
    console.log(event);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <LinkWidget link={DummyLink}></LinkWidget>
    </main>
  );
}
