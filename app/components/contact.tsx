"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { FaDivide } from "react-icons/fa6";


export default function Contact() {
  const { ref } = useSectionInView("Contact");
  // const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 35rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      
      <SectionHeading>Contact Me</SectionHeading>
      <div >
        Please contact me directly <br /> @ 
        <a href="qayaz9465@gmail.com">qayaz9465@gmail.com</a>
        <br />
        <br />
        <div style={{ display: 'flex', gap: '80px' }}>
      <a className="text-blue-800" href="https://www.facebook.com/profile.php?id=61555901770960" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a className="text-blue-600" href="https://x.com/Zainab345690" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
      <a className="text-blue-900" href="https://www.linkedin.com/in/zainab-ayaz-3081482b5/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a className="text-pink-800" href="https://www.instagram.com/zainabayaz2026/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
    </div>
        
      </div>
      
    </motion.section>
    
  );
}
