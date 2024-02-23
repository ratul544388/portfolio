"use client";

import { navItems } from "@/constants";
import { useActiveSectionStore } from "@/hooks/use-active-section";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "./ui/button";

export const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const animate = open ? "open" : "close";
  const { activeSection, setActiveSection } = useActiveSectionStore();
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="sm:hidden z-50">
      <motion.aside
        variants={{
          open: { width: 250, height: "auto", x: 0, y: 0, opacity: 1 },
          close: {
            width: 0,
            height: 0,
            opacity: 1,
            transition: { delay: 0.4 },
          },
        }}
        initial="close"
        animate={animate}
        className="fixed -z-10 flex flex-col rounded-bl-xl right-0 top-0 bg-background shadow-lg border"
      >
        <div className="w-full pr-10 h-full flex flex-col gap-3 p-5 pt-16">
          {navItems.map(({ label, href, icon: Icon }, index) => (
            <motion.div
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.05 * index + 0.3 },
                },
                close: {
                  y: -30,
                  opacity: 0,
                  transition: { delay: index * 0.05 },
                },
                exit: { y: -30, opacity: 0 },
              }}
              initial="close"
              animate={animate}
              exit="exit"
              key={label}
              className={cn(
                "bg-slate-100 rounded-full font-medium shadow-md flex",
                activeSection === label && "gradient"
              )}
            >
              <Link
                href={href}
                onClick={() => {
                  setActiveSection(label);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-4 py-1.5 px-5"
              >
                <Icon className="h-5 w-5"/>
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.aside>
      <Button
        onClick={() => setOpen(!open)}
        className={cn(
          "z-[100] h-12 w-12 shadow-lg",
          // open && "hover:bg-neutral-800"
        )}
        size="icon"
        variant={open ? "gradient" : "secondary"}
      >
        <HiMenuAlt3 className="h-8 w-8" />
      </Button>
    </div>
  );
};
