"use client";
import clsx from 'clsx'

import Clock from "@/components/clock/clock";
import FavLinksContainer from "@/components/links/favLinksContainer";
import Navbar from "@/components/navbar/main-nav";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { DummyLinks } from "@/mocks/links.mock";

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden">
      <Navbar></Navbar>
      <Wallpaper />
      <Clock />

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
