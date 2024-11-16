"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/app/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-pink-200 border-opacity-40 bg-pink-100 bg-opacity-80 shadow-lg backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <nav className="fixed top-[0.11rem] left-1/2 h-9 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-auto sm:py-0">
        <ul className="flex w-[20rem] items-center justify-center gap-y-1 text-[0.7rem] sm:text-[0.9rem] font-medium  text-blue-900 sm:w-auto sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-3/4 flex items-center justify-center"
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-blue-800 transition",
                  {
                    "text-gray-950": activeSection === link.name,
                  }
                )}
                href={link.hash}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 bg-pink-100 rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
