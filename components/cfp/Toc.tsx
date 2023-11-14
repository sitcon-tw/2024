"use client";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

export default function Toc({
  sections,
  children,
}: {
  sections: { link: string; name: string }[];
  children?: React.ReactNode;
}) {
  const [selectedSection, setSelectedSection] = useState<null | string>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setSelectedSection("#" + entry.target.id);
          break;
        }
      }
    });

    for (const section of sections) {
      const targetElement = document.querySelector(section.link);
      if (!targetElement) continue;
      observer.observe(targetElement);
    }

    setSelectedSection(sections[0].link);
    console.log("set selected section to", sections[0].link);
  }, [sections]);

  const handleClick = (link: string) => {
    // const navbarHeight = 69+250;
    const targetElement = document.querySelector(link);
    if (targetElement) {
      // close dropdown
      setTimeout(() => setOpen(false), 1000);
    }
  };

  return (
    <>
      <div className="flex lg:hidden flex-col">
        {children && children}
        {/* dropdown */}
        <div
          className="border border-gold rounded-lg flex flex-grow justify-center items-center px-4 mb-2 cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        >
          <h1 className="text-gold">本頁目錄</h1>
          <span className="flex-grow" />
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.0001L7.5 16.5001L8.95 15.0501L12 18.1001L15.05 15.0501L16.5 16.5001L12 21.0001ZM8.95 9.0501L7.5 7.6001L12 3.1001L16.5 7.6001L15.05 9.0501L12 6.0001L8.95 9.0501Z"
                fill="#E5C366"
              />
            </svg>
          </span>
        </div>
        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, overflow: "hidden" }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="rounded-lg border border-gold bg-white"
            >
              <div className="px-4 overflow-hidden">
                {sections.map((section, index) => (
                  <a
                    href={section.link}
                    className={`block ${
                      section.link === selectedSection
                        ? "text-[#1E1E1E] font-extrabold "
                        : "text-gray-500"
                    }`}
                    onClick={() => handleClick(section.link)}
                    key={index}
                  >
                    <div className="w-1 h-1.2em rounded-full bg-[#AC24FF] transition-all duration-300" />
                    {section.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="min-w-[200px] hidden lg:flex flex-col gap-3 sticky top-[88px] self-start leading-6">
        {children && children}
        <h2 className="text-xl font-bold">本頁目錄</h2>
        {sections.map((section, index) => (
          <a
            href={section.link}
            className={twMerge(
              `block transition-all duration-300 cursor-pointer`,
              section.link === selectedSection
                ? "text-[#1E1E1E] font-extrabold"
                : "text-gray-500 hover:text-gray-600 active:text-gray-700",
              `border-l-2 pl-1.5 -translate-x-1.5 border-l-transparent`,
              section.link === selectedSection && "border-l-black"
            )}
            onClick={() => handleClick(section.link)}
            key={index}
          >
            <div className="w-1 h-1.2em rounded-full bg-[#AC24FF] transition-all duration-300" />
            {section.name}
          </a>
        ))}
      </div>
    </>
  );
}
