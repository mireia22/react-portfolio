import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { PROJECTS } from "../../data/data";
import ProjectTemplate from "./ProjectTemplate";
import { useSectionInView } from "../../Hooks/Hooks";
import WaveDivider from "../SectionDivider/WaveDivider";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      id="projects"
      className="relative scroll-mt-[1rem] mt-16 bg-hero-pattern bg-background bg-opacity-80 bg-fixed min-w-full sm:scroll-mt-[6rem]"
    >
      <WaveDivider before/>
      <SectionHeading>projects</SectionHeading>
      <ul className="flex flex-col gap-4 items-center p-4 mb-20">
        {PROJECTS.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectTemplate {...project} />
          </React.Fragment>
        ))}
      </ul>
      <WaveDivider before = {false} />
    </section>
  );
};

export default Projects;
