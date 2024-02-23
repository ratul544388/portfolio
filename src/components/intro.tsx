"use client";

import DeveloperImage from "@/../public/images/developer.png";
import ShapeImage from "@/../public/images/hero-shape.png";
import { ease, socialIcons } from "@/constants";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Button, buttonVariants } from "./ui/button";
import { RevealInView } from "./reveal-in-view";

export const Intro = () => {
  const { ref } = useScroll({
    section: "Home",
    threshold: 0,
  });
  const MotionLink = motion(Link);
  const animation = useAnimation();
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-screen-lg flex flex-col-reverse items-center md:items-start md:flex-row mt-[150px] scroll-mt-28"
    >
      <div className="flex flex-col">
        <RevealInView>
          <h3 className="font-light tracking-widest">WEB DEVELOPER</h3>
        </RevealInView>
        <RevealInView y={0} x={-100} delay={0.2}>
          <h1 className="font-extrabold leading-[50px] text-4xl mt-3 text-primary">
            Hello, My name is <br /> Ratul Hossain
          </h1>
        </RevealInView>
        <RevealInView y={0} x={-100} delay={0.4}>
          <p className="mt-2">
            I&apos;m a{" "}
            <span className="font-bold">Full Stack Web Developer </span>
            with <span className="font-bold">2 years </span> of expertise in{" "}
            <Link
              href="https://react.dev"
              target="_blank"
              className="font-bold underline"
            >
              React
            </Link>{" "}
            and{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="font-bold underline"
            >
              Next.js,
            </Link>{" "}
            dadicated to building outstanding digital solutions.
          </p>
        </RevealInView>
        <RevealInView y={0} x={-100} delay={0.6}>
          <div className="flex items-center gap-3 mt-5">
            <Button className="gap-2 group">
              Contact me
              <FaLongArrowAltRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
            <MotionLink
              href="/"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "relative overflow-hidden gap-2 hover:text-white group"
              )}
              initial="hidden"
              whileHover="visible"
            >
              <span className="z-10">Download CV</span>
              <MdOutlineFileDownload className="z-10 h-4 w-4 group-hover:translate-y-1 transition" />
              <motion.span
                variants={{ hidden: { x: "-101%" }, visible: { x: 0 } }}
                transition={{ ease: [0.32, 0, 0.67, 0] }}
                className="absolute inset-0 bg-neutral-900 rounded-full"
              />
            </MotionLink>
          </div>
        </RevealInView>
        <RevealInView y={0} x={-100} delay={0.8}>
          <div className="mt-4 flex gap-3">
            {socialIcons.map(({ icon: Icon, href }, index) => (
              <MotionLink
                className={cn(
                  buttonVariants({ size: "icon", variant: "secondary" }),
                  "relative overflow-hidden hover:text-white"
                )}
                href={href}
                key={index}
                initial="hidden"
                whileHover="visible"
              >
                <Icon className="h-4 w-4 z-10" />
                <motion.span
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 },
                  }}
                  transition={{ ease: [0.32, 0, 0.67, 0] }}
                  className="absolute inset-0 bg-primary rounded-full"
                />
              </MotionLink>
            ))}
          </div>
        </RevealInView>
      </div>
      <motion.div
        animate={{ opacity: 1, x: [200, 0], transition: { type: "spring" } }}
        className="relative opacity-0"
      >
        <div className="relative w-[180px] md:w-[360px] aspect-[7/6]">
          <Image
            src={ShapeImage}
            alt="hero-shape"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-5 w-[115px] md:w-[230px] aspect-square">
          <Image
            src={DeveloperImage}
            alt="developer photo"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};
