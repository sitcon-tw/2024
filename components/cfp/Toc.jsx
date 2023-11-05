"use client"
import React, { useState } from 'react';

export default function Toc({ sections }) {
    const [selectedSection, setSelectedSection] = useState(null);

  const handleClick = (link) => {
    const navbarHeight = 69;
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top - navbarHeight;
      const delay = 100; //ms
      setTimeout(() => {
        window.scrollTo({ top: window.scrollY + offset, behavior: 'smooth' });
      }, delay);

      setSelectedSection(link);
    }
  };

  return (
    <div className="flex gap-6 container">
      <div className="min-w-[180px] hidden lg:flex flex-col p-4 fixed top-0 right-4 mt-32 bg-white hover:cursor-pointer">
        <h2 className="text-xl font-bold mb-4">本頁目錄</h2>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <a
                className={`block mb-2 ${section.link === selectedSection ? "text-black font-extrabold " : "text-gray-500"}`}
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
  );
}
