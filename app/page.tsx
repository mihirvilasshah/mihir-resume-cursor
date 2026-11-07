import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { Craft } from "@/components/craft";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Social } from "@/components/social";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Nav />
      <Hero />
      <Metrics />
      <Timeline />
      <Projects />
      <Craft />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}
