"use client";

import { useScroll as usescrollActiveSection } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { buttonVariants } from "./ui/button";
import { RevealInView } from "./reveal-in-view";
import { useWindowSize } from "usehooks-ts";

interface ProjectProps {
  name: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  index: number;
}

export const Project = ({
  name,
  description,
  image,
  tags,
  index,
}: ProjectProps) => {
  const animation = useAnimation();
  const { width } = useWindowSize();
  const { ref } = usescrollActiveSection({
    section: "Projects",
  });

  const odd = index % 2 !== 0;

  return (
    <motion.section
      ref={ref}
      onMouseEnter={() => animation.start("visibleIcons")}
      onMouseLeave={() => animation.start("hiddenIcons")}
      className={cn(
        "group flex flex-col shadow-inner sm:flex-row relative overflow-hidden justify-between gap-6 rounded-lg bg-accent mt-3",
        odd && "sm:flex-row-reverse"
      )}
    >
      <div className={cn("flex flex-col p-5 sm:w-1/2")}>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-sm my-2">{description}</p>
        <div className="flex gap-2 flex-wrap mt-7">
          {tags.map((tag) => (
            <div
              className="px-3 text-xs order-2 font-medium py-0.5 bg-neutral-500 text-white rounded-full"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt="image"
        className={cn(
          "sm:absolute hover:scale-[1.04] group-hover:rotate-[-2deg] right-[-35%] shadow-[-6px_5px_10px_rgba(0,0,0,0.3)] top-[15%] rounded-lg sm:max-w-[500px] transition duration-200",
          odd &&
            "group-hover:rotate-[2deg] right-[initial] left-[-35%] shadow-[6px_5px_10px_rgba(0,0,0,0.3)]"
        )}
        placeholder="blur"
      />
      <motion.div
        variants={{ hiddenIcons: { scale: 0 }, visibleIcons: { scale: 1 } }}
        initial="hiddenIcons"
        animate={animation}
        className={cn(
          "flex gap-3 absolute left-1/2 bottom-[17%] sm:left-[initial] sm:right-[15%] sm:bottom-[35%]",
          odd && "sm:right-[initial] sm:left-[15%]"
        )}
        style={{ translateX: width <= 640 ? "-50%" : "0" }}
      >
        <Link
          className={cn(buttonVariants({ size: "icon" }))}
          href={"github"}
        >
          <FaGithub className="h-4 w-4" />
        </Link>
        <Link
          className={cn(buttonVariants({ size: "icon" }))}
          href={"github"}
        >
          <ImEarth className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.section>
  );
};
