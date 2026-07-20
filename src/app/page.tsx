import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { WayIBuild } from "@/components/sections/WayIBuild";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Projects />
        <WayIBuild />
      </main>
    </>
  );
}
