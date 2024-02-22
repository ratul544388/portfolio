"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NavigationMenu } from "./navigation-menu";
import { cn } from "@/lib/utils";

export const MobileNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed px-5 inset-x-0 z-50 top-0 flex sm:hidden items-center justify-between h-[70px] transition-all",
        scrollY >= 100 && "bg-neutral-900/10 backdrop-blur-md"
      )}
    >
      <Logo />
      <NavigationMenu />
    </div>
  );
};
