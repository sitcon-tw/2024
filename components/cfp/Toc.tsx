"use client";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

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
      console.log("entries", entries.length);
      for (const entry of entries) {
        console.log("intersecting", entry.target.id);
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
      // const offset = targetElement.getBoundingClientRect().top - navbarHeight;
      // const delay = 100; //ms
      // setTimeout(() => {
      //   window.scrollTo({ top: window.scrollY + offset, behavior: "smooth" });
      // }, delay);

      setTimeout(() => setOpen(false), 1000);
      // setOpen(false)
    }
  };

  return (
    <>
      <div className="flex lg:hidden flex-col mb-4">
        {/* dropdown */}
        <div
          className="border border-gold rounded-lg flex flex-grow justify-center items-center px-4"
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
        {/* menu */}
        {/* TODO: fix border */}
        <div
          className={twMerge(
            "px-4 overflow-hidden transition-all border-x-2-6 border-b-2-6 rounded-lg",
            open ? "h-fit border" : "h-0"
          )}
        >
          <ul>
            {sections.map((section, index) => (
              <li key={index}>
                <a
                  href={section.link}
                  className={`block ${
                    section.link === selectedSection
                      ? "text-black font-extrabold "
                      : "text-gray-500"
                  }`}
                  onClick={() => handleClick(section.link)}
                >
                  <div className="w-1 h-1.2em rounded-full bg-[#AC24FF] transition-all duration-300" />
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="min-w-[200px] hidden lg:flex flex-col p-4 hover:cursor-pointer gap-4 sticky top-[88px] self-start">
        {children && children}
        <h2 className="text-xl font-bold">本頁目錄</h2>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={section.link}
                className={`block ${
                  section.link === selectedSection
                    ? "text-black font-extrabold "
                    : "text-gray-500"
                }`}
                onClick={() => handleClick(section.link)}
              >
                <div className="w-1 h-1.2em rounded-full bg-[#AC24FF] transition-all duration-300" />
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
