"use client";

import { navItems } from "@/constants";
import { useActiveSectionStore } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const { activeSection, setActiveSection, setLastTimeClicked } =
    useActiveSectionStore();

  return (
    <motion.nav
      initial={{ y: -120, left: "50%", translateX: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-3 opacity-0 z-50 hidden sm:flex bg-background/80 backdrop-blur-sm border shadow-md py-2 px-3 rounded-full"
    >
      {navItems.map(({ label, href }) => {
        const isActive = label === activeSection;
        return (
          <Link
            onClick={() => {
              setLastTimeClicked(new Date());
              setActiveSection(label);
            }}
            href={href}
            key={label}
            className={cn(
              "relative px-3 py-1 font-medium text-gray-600 hover:text-foreground transition-colors",
              isActive && "text-white hover:text-white"
            )}
          >
            {label}
            {isActive && (
              <motion.span
                layoutId="activeSection"
                className="absolute -z-10 inset-0 bg-gradient-to-r from from-indigo-500 via to-purple-500 rounded-full"
              />
            )}
          </Link>
        );
      })}
    </motion.nav>
  );
};
