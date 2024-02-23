"use client";

import { ReactNode } from "react";
import { RevealInView } from "./reveal-in-view";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const SectionHeading = ({
  children,
  delay,
  className,
}: SectionHeadingProps) => {
  return (
    <RevealInView delay={delay} y={100}>
      <h2 className={cn("text-3xl font-medium capitalize", className)}>
        {children}
      </h2>
    </RevealInView>
  );
};
