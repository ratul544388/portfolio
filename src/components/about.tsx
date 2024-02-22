"use client";

import { useScroll } from "@/hooks/use-scroll";
import { SectionHeading } from "./section-heading";
import { RevealInView } from "./reveal-in-view";

interface AboutProps {}

export const About = ({}: AboutProps) => {
  const { ref } = useScroll({
    section: "About",
  });
  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col gap-8 items-center scroll-mt-32"
    >
      <SectionHeading>About</SectionHeading>
      <RevealInView>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
          voluptate corporis blanditiis sit aspernatur recusandae. Corporis
          ducimus inventore praesentium dicta sint facere neque consectetur,
          tempore ad alias quae voluptatum voluptatem saepe molestiae iusto,
          exercitationem quo cumque. Sunt fugiat quis earum doloribus voluptates
          eligendi ex laboriosam eius recusandae cumque, quae tenetur.
        </p>
      </RevealInView>
    </section>
  );
};
