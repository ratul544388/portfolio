"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ReactNode, useState } from "react";

interface AnimatedButtonProps {
  onClick?: () => void;
  href?: string;
  variant?: "default" | "secondary";
  size?: "default" | "icon";
  className?: string;
  children?: ReactNode;
}

export const AnimatedButton = ({
  onClick,
  href,
  variant = "secondary",
  size = "icon",
  className,
  children,
}: AnimatedButtonProps) => {
  const Comp = href ? motion(Link) : motion(Button);
  const animation = useAnimation();
  return (
    <Comp
      href={href || "/"}
      variant={variant}
      size={size}
      onClick={onClick}
      className={cn(
        href && buttonVariants({ variant, size }),
        "relative overflow-hidden hover:text-white",
        className
      )}
      onMouseEnter={() => {
        animation.start("visible");
      }}
      onMouseLeave={() => {
        animation.start("hidden");
      }}
    >
      <span className="z-10">{children}</span>
      <motion.span
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ type: "tween" }}
        className="bg-blue-600 absolute inset-0 rounded-full"
      />
    </Comp>
  );
};
