"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { Icon } from '@iconify/react';




export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[73rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading>My Skills</SectionHeading>
     
      <div className="flex space-x-4 text-5xl">
      <Icon icon="logos:html-5" className="text-orange-500 text-10xl w-20 h-20 hover:scale-125 transition-transform duration-300" /> 
      <Icon icon="logos:css-3" className="text-blue-500 text-10xl w-20 h-20 hover:scale-125 transition-transform duration-300" />
      <Icon icon="logos:javascript" className="text-yellow-500 text-25xl w-20 h-20 hover:scale-125 transition-transform duration-300" />
      <Icon icon="logos:typescript-icon" className="text-blue-600 text-25xl w-20 h-20 hover:scale-125 transition-transform duration-300" /> 
      <Icon icon="logos:nextjs" className="text-gray-900 text-25xl w-23 h-23 hover:scale-125 transition-transform duration-300" />
      <Icon icon="logos:git-icon" className="text-orange-700 text-25xl w-20 h-20 hover:scale-125 transition-transform duration-300" />
      <Icon icon="logos:github-icon" className="text-gray-700 text-25xl w-20 h-20 hover:scale-125 hover:text-200 transition-transform duration-300" />
    </div>
     
    </section>
  );
}
