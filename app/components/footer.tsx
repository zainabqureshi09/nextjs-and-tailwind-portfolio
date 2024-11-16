import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-blue-600">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} All rights reserved by Zainab.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js , TypeScript, Tailwind CSS,
        Framer Motion and Vercel hosting.
      </p>
    </footer>
  );
}
