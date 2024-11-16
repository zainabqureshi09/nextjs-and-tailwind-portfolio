import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Intro from "@/app/components/intro";
import Projects from "@/app/components/projects";
import ScrollUp from "@/app/components/scroll-up";
import SectionDivider from "@/app/components/section-divider";
import Skills from "@/app/components/skills";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-purple-950 items-center px-4 font-serif">
      <Intro />
      <br />
      <SectionDivider />
      <br />
      <About />
      <br />
      <Projects />
      <br />
      <Skills />
      <br />
      <Contact />
      <br />
      <ScrollUp />
    </main>
  );
}
