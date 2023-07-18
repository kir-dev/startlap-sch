"use client";
import FavLinksContainer from "@/components/links/favLinksContainer";
import { DummyLink, DummyLink2 } from "@/mocks/links.mock";

export default function Home() {
  const links = [DummyLink, DummyLink2];
  return (
    <main className="min-h-screen">
      <h1>StartlapSCH</h1>
      <FavLinksContainer links={links}></FavLinksContainer>
      <FavLinksContainer links={links}></FavLinksContainer>
    </main>
  );
}
