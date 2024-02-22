"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { MyExperience } from "@/components/my-experience";
import { MyProjects } from "@/components/my-projects";
import { MySkills } from "@/components/my-skills";
import { VerticalLine } from "@/components/vertical-line";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 h-full items-center max-w-screen-lg mx-auto px-5 sm:px-8">
      <Intro />
      <VerticalLine delay={0.4} />
      <About />
      <VerticalLine />
      <MyProjects />
      <VerticalLine />
      <MySkills />
      <VerticalLine />
      <MyExperience />
      <VerticalLine/>
      <Contact/>
    </div>
  );
}
