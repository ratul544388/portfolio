"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NavigationMenu } from "./navigation-menu";
import { cn } from "@/lib/utils";
import { RevealInView } from "./reveal-in-view";

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
    <nav
      className={cn(
        "fixed inset-x-0 z-50 top-0 sm:hidden h-[70px] transition-all",
        scrollY >= 100 && "bg-neutral-900/10 backdrop-blur-md"
      )}
    >
      <RevealInView
        y={-50}
        className="flex h-full items-center justify-between px-5"
      >
        <Logo />
        <NavigationMenu />
      </RevealInView>
    </nav>
  );
};
