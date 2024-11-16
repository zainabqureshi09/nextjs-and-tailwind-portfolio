"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { FaLinkSlash } from "react-icons/fa6";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectsCard({
  title,
  imageUrl,
  siteUrl,
  codeUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="w-full sm:w-auto">
      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="group mb-3 sm:mb-8 last:mb-0"
        ref={ref}
      >
        <section className="rounded-lg relative bg-gradient-to-r from-purple-200 to-blue-300 max-w-[32rem] p-5 text-left border border-pink-100 overflow-hidden sm:h-[20rem] group-even:pl-5 hover:from-blue-300 hover:to-purple-300 transition flex flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:order-last">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="w-full h-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg shadow-2xl group-even:rounded-l-none group-even:rounded-r-lg group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:relative sm:left-6"
            />
          </div>

          <div className="p-4 sm:p-6 sm:w-1/2">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                <a href={siteUrl} target="_blank">
                  {title}
                </a>
              </h3>
              <div className="flex gap-2">
                <a href={siteUrl} target="_blank" title="Live Preview">
                  <FaExternalLinkAlt className=" cursor-pointer" color="blue" />
                </a>
                <a href={codeUrl} target="_blank" title="View Code">
                  <FaGithub className=" cursor-pointer" />
                </a>
              </div>
            </div>

          
          </div>
        </section>
      </motion.div>
    </div>
  );
}
