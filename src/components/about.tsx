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
      <RevealInView className="flex flex-col items-center gap-4">
        <p>
          Hello! <span className="font-semibold">I&apos;m Ratul Hossain</span>,
          a <span className="font-semibold">24-year-old</span>{" "}
          <span className="font-semibold">full-stack web developer</span> with{" "}
          <span className="font-semibold">2+ years</span> of experience.
          Proficient in HTML, CSS, Tailwind CSS,{" "}
          <span className="font-semibold">React</span>, JavaScript, TypeScript,
          ShadcnCN UI, Framer Motion, and{" "}
          <span className="font-semibold">Next.js</span>, Node.js,
          <span className="font-semibold">MongoDB</span>, MySQL, Stripe.
        </p>
        <p>
          I&apos;ve independently developed a variety of projects including
          e-commerce websites, food delivery platforms, gym admin tools, and
          social media apps. My dedication to continuous learning has allowed me
          to deliver high-quality, user-centric solutions in the ever-evolving
          web development landscape.
        </p>
        <p>
          Excited to bring my expertise to new challenges and contribute to
          impactful digital experiences.
        </p>
      </RevealInView>
    </section>
  );
};
