"use client";

import { socialIcons } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const MotionLink = motion(Link);

  return (
    <footer className="mt-20">
      <div className="bg-slate-50 shadow-[0_-3px_10px_rgba(0,0,0,0.2)] flex flex-col items-center gap-2 py-8 px-5">
        <nav className="flex mt-1">
          {socialIcons.map(({icon: Icon, href}, i) => (
            <MotionLink
              target="_blank"
              whileTap={{
                scale: 1.05,
              }}
              key={i}
              className="p-2 text-theme"
              href={href}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
            >
              <Icon className="h-5 w-5" />
            </MotionLink>
          ))}
        </nav>
        <p className="text-sm text-slate-400 text-center">
          Inspiring through design, code, and creativity. Let&apos;s collaborate
          and make magic happen! © Ratul Hossain - 2024
        </p>
      </div>
    </footer>
  );
};
