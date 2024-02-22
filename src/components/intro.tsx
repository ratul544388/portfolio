"use client";

import DeveloperImage from "@/../public/images/developer.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { AnimatedButton } from "./animated-button";
import { RevealInView } from "./reveal-in-view";
import { Button, buttonVariants } from "./ui/button";
import { useScroll } from "@/hooks/use-scroll";

export const Intro = () => {
  const { ref } = useScroll({
    section: "Home",
    threshold: 0,
  });
  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col gap-8 items-center pt-32 max-w-screen-sm"
    >
      <RevealInView>
        <div className="relative w-[60px] aspect-square bg-blue-600 rounded-full ring-4 ring-background shadow-xl">
          <Image src={DeveloperImage} alt="image" className="" />
          <motion.span
            animate={{
              opacity: [0, 0.8],
              scale: [1, 1.1, 1],
              rotate: [0, -20, 0, 20, 0],
            }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 right-0 z-20 text-xl"
          >
            👋
          </motion.span>
        </div>
      </RevealInView>
      <RevealInView delay={0.2}>
        <h1 className="text-3xl text-center mt-5 text-gray-800 leading-10">
          <span className="font-extrabold text-blue-600">
            Hello I&apos;m Ratul.{" "}
          </span>
          I&apos;m a{" "}
          <span className="font-extrabold text-blue-600">
            Full-stack web developer{" "}
          </span>{" "}
          with <span className="font-extrabold text-blue-600">2 years </span> of
          experience. I enjoy building sites & apps. My main focus is{" "}
          <Link href={""} className="underline">
            React{" "}
          </Link>
          <Link href={""} className="underline">
            (Next.js)
          </Link>
          .
        </h1>
      </RevealInView>
      <RevealInView delay={0.3}>
        <div className="flex flex-col items-center sm:flex-row gap-3 mt-7">
          <div className="flex gap-3">
            <Link href={""} className={cn(buttonVariants(), "group")}>
              Contact me here
              <FaLongArrowAltRight className="h-4 w-4 ml-2" />
            </Link>
            <Button variant="secondary">
              Download CV
              <MdOutlineFileDownload className="h-4 w-4 ml-2 group-hover:translate-y-[20%] transition" />
            </Button>
          </div>
          <div className="flex gap-3">
            <AnimatedButton size="icon" variant="secondary" href="/">
            <FaLinkedinIn className="h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton size="icon" variant="secondary" href="/">
              <FaGithub className="h-4 w-4" />
            </AnimatedButton>
          </div>
        </div>
      </RevealInView>
    </section>
  );
};
