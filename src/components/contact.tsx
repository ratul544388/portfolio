"use client";

import { useScroll } from "@/hooks/use-scroll";
import { SectionHeading } from "./section-heading";
import { RevealInView } from "./reveal-in-view";
import { myEmail } from "@/constants";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  const { ref } = useScroll({
    section: "Contact",
  });
  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col h-full items-center scroll-mt-28"
    >
      <SectionHeading>Contact me</SectionHeading>
      <RevealInView className="text-sm text-muted-foreground mt-2">
        Contact me directly at{" "}
        <Link className="text-foreground underline" href={`mailto:${myEmail}`}>
          {myEmail}
        </Link>{" "}
        or through this form.
      </RevealInView>
      <RevealInView className="mt-8 w-full">
        <ContactForm />
      </RevealInView>
    </section>
  );
};
