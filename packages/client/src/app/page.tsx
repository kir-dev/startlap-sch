"use client";
import Clock from "@/components/clock/clock";
import FavLinksContainer from "@/components/links/favLinksContainer";
import Wallpaper from "@/components/wallpaper/wallpaper";
// import { DummyLink, DummyLink2 } from "@/mocks/links.mock";
import { DummyLinks } from "@/mocks/links.mock";

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden">
      <Wallpaper></Wallpaper>
      <Clock></Clock>

      <h1>StartlapSCH</h1>
      <FavLinksContainer
        links={DummyLinks}
        title="Kedvencek"
      ></FavLinksContainer>
      <FavLinksContainer
        links={DummyLinks}
        title="Felkapottak"
      ></FavLinksContainer>
    </main>
  );
}
