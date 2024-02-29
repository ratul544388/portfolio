"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease } from "@/constants";

interface RevealInViewProps {
  children?: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  duration?: 5;
}

export const RevealInView = ({
  children,
  delay = 0,
  y = 0,
  x = 0,
  scale = 1,
  className,
  duration,
}: RevealInViewProps) => {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y, scale, x },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          x: 0,
          transition: { duration: 0.5, delay, ease },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};
