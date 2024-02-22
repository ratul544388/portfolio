"use client";

import { experiences } from "@/constants";
import { useScroll } from "@/hooks/use-scroll";
import "react-vertical-timeline-component/style.min.css";
import { SectionHeading } from "./section-heading";
import { TimelineItem } from "./timeline-item";

export const MyExperience = () => {
  const { ref } = useScroll({ section: "Experience", threshold: 0.2 });
  return (
    <section
      ref={ref}
      id="experience"
      className="flex flex-col h-full items-center scroll-mt-28"
    >
      <SectionHeading className="mb-8">My Emperience</SectionHeading>
      {experiences.map(
        (item, index) => (
          <TimelineItem {...item} key={index} index={index}/>
        )
      )}
    </section>
  );
};
