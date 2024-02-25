import { Carousel } from "@/components/Carousel/Carousel";
import Clock from "@/components/clock/clock";
import FavLinksContainer from "@/components/links/favLinksContainer";
import Navbar from "@/components/navbar/navbar";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { DummyCollections } from "@/mocks/collection.mock";

export default async function Home() {
  // const collections = await getCollections();
  return (
    <main className="min-h-screen overflow-y-hidden">
      {/* TODO ez menjen layout tsxbe (legalább a navbar) */}
      <Navbar />
      <Wallpaper />
      <Clock />

      <h1>StartlapSCH</h1>
      <FavLinksContainer title="Kedvencek"></FavLinksContainer>
      <FavLinksContainer title="Felkapottak"></FavLinksContainer>
      <Carousel items={DummyCollections} name="Kollekciók" />
    </main>
  );
}
