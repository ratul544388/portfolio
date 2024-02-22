"use client";

import { projects } from "@/constants";
import { Project } from "./project";
import { SectionHeading } from "./section-heading";

interface MyProjectsProps {}

export const MyProjects = ({}: MyProjectsProps) => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-8 drop-shadow-lg gap-6 items-center max-w-screen-sm scroll-mt-32"
    >
      <SectionHeading>My projects</SectionHeading>
      {projects.map((project, index) => (
        <Project key={index} {...project} index={index} />
      ))}
    </section>
  );
};
