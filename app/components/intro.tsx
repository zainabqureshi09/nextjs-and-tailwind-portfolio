"use client";

import Image from "next/image";
import React from "react";
import profileImg5 from "@/public/zainabs.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import { CVLINK } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-purple-950  text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1.5, scale: 1.5 }}
            transition={{ duration: 0.2, type: "tween" }}
          > <br />
            <Image
              src={profileImg5}
              alt="Zainab"
              width={500}
              height={500}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-purple-100 object-cover shadow-xl hover:scale-150 transition"
            />
          </motion.div>
          <br />
          <br />

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 125,
              delay: 0.1,
            }}
          >
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-1xl"
      >
        Hello, {"I'm"} <span className="font-bold text-pink-800">Zainab Ayaz</span>. A
        front-end developer from{" "}
        <span className="font-bold text-pink-800">Karachi Pakistan</span>. I
        enjoy building sites & <span className="font-bold text-pink-800">do new things</span>.
        My focus is{" "}
        <span className="font-bold text-pink-800">HTML, CSS, Javascript, Typescript, TailwindCSS and</span> (
        <span className="font-bold text-pink-800">Next.js </span>)and now I am working on costums gpts and AI technologies
      </motion.h1>
<br />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-blue-900 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-90 hover:scale-90 hover:bg-blue-950 active:scale-85 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href={CVLINK}
          target="_blank"
          className="group bg-pink-100 px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-90 hover:scale-90 active:scale-85 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer" />
        </Link>

        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com/in/zainab-ayaz-3081482b5/"
            target="_blank"
            className="bg-pink-100 p-4 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
          >
            <BsLinkedin />
          </Link>

          <Link
            href="https://github.com/zainabqureshi09"
            target="_blank"
            className="bg-pink-100 p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
    
  );
}
