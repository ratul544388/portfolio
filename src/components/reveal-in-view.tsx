"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealInViewProps {
  children?: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  className?: string;
  type?: "tween" | "spring";
}

export const RevealInView = ({
  children,
  delay = 0,
  y = 50,
  scale = 1,
  className,
  type = "spring",
}: RevealInViewProps) => {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y, scale },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{
        delay,
        type,
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
