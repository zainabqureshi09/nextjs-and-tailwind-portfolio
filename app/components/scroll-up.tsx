"use client";

import { useActiveSectionContext } from "@/app/context/active-section-context";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollUp() {
  const { activeSection } = useActiveSectionContext();

  if (activeSection !== "Home" && activeSection !== "About") {
    return (
      <span className="fixed bottom-10 right-10 text-xl">
        <a href="#home" title="Scroll Up">
          <FaArrowAltCircleUp />
        </a>
      </span>
    );
  }
}
