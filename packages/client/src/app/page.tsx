import Clock from "@/components/clock/clock";
import FavLinksContainer from "@/components/links/favLinksContainer";
import Navbar from "@/components/navbar/navbar";
import Wallpaper from "@/components/wallpaper/wallpaper";
import { getLinks } from "@/network/getLinks";

export default async function Home() {
  // const collections = await getCollections();
  const links = await getLinks();
  return (
    <main className="min-h-screen overflow-y-hidden">
      {/* TODO ez menjen layout tsxbe (legalább a navbar) */}
      <Navbar />
      <Wallpaper />
      <Clock />

      <h1>StartlapSCH</h1>
      <FavLinksContainer title="Felkapottak" links={links}></FavLinksContainer>
      {/* <Carousel items={DummyCollections} name="Kollekciók" /> */}
    </main>
  );
}
