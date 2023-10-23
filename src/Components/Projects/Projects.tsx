import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { PROJECTS } from "../../data/data";
import ProjectTemplate from "./ProjectTemplate";
import { useSectionInView } from "../../Hooks/Hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mt-16">
      <SectionHeading>My projects</SectionHeading>
      <ul className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectTemplate {...project} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
