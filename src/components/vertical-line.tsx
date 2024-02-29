"use client";

import { RevealInView } from "./reveal-in-view";
import { Separator } from "./ui/separator";

interface VerticalLineProps {
  className?: string;
  delay?: number;
}

export const VerticalLine = ({ className, delay }: VerticalLineProps) => {
  return (
    <RevealInView delay={delay} y={50}>
      <Separator
        className="h-[50px] w-[2px] bg-blue-300/50"
        orientation="vertical"
      />
    </RevealInView>
  );
};
