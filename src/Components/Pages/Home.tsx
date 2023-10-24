import Intro from "../Intro/Intro";
import SectionDivider from "../SectionDivider/SectionDivider";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Studies from "../Studies/Studies";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <main className="flex flex-col items-center ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />

      <Studies />
      <Projects />
      <SectionDivider />
      <Contact />
    </main>
  );
};

export default Home;
