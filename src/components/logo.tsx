"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaRProject } from "react-icons/fa";

interface LogoProps {}

export const Logo = ({}: LogoProps) => {
  return (
    <Link
      href="#home"
      className={cn(
        buttonVariants({
          size: "icon",
        }),
        "rounded-[14px] h-12 w-12 font-semibold text-lg bg-blue-600 hover:bg-blue-600/90 sm:hidden z-[200] shadow-lg"
      )}
      style={{ borderBottomLeftRadius: "6px" }}
    >
      <FaRProject className="h-7 w-7" />
    </Link>
  );
};
