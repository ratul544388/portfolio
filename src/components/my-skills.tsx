"use client";

import { skills } from "@/constants";
import { RevealInView } from "./reveal-in-view";
import { SectionHeading } from "./section-heading";
import { useScroll } from "@/hooks/use-scroll";

export const MySkills = () => {
  const { ref } = useScroll({ section: "Skills" });
  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col gap-8 items-center max-w-screen-sm scroll-mt-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {skills.map((item, index) => (
          <RevealInView
            key={item}
            delay={0.05 * index}
            y={30}
            className="px-3 py-0.5 text-sm bg-white shadow-md font-medium border rounded-full"
          >
            {item}
          </RevealInView>
        ))}
      </div>
    </section>
  );
};
