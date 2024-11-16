"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
  
    >
      
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-purple-950 text-2xl">
        I am Frontend web developer with a passion for HTML5, CSS3, JavaScript, Typescript, TailwindCSS and Next.js. With a
        strong background in IT, I love crafting front-end magic and find incredible solutions. Lets build something amazing together! 💻✨
      </p>
    </motion.section>
  );
}
