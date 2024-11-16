"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import ProjectsCard from "./projects-card";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 text-purple-950 font-serif">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid gap-6 lg:grid-cols-2 font-serif">
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectsCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
