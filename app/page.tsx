import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <main className="relative  flex  flex-col overflow-hidden  ">
      <div className="px-28 w-full py-5">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
