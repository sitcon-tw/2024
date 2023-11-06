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
      <div className="lg:w-[143px] xl:w-[196px] hidden lg:flex flex-col p-4 fixed top-0 right-4 mt-24 bg-white hover:cursor-pointer gap-4">
        <button className="bg-gold text-xl font-bold text-white h-[40px] w-full rounded-full hover:shadow-[0px_4px_16px_0px_#E5C366CC] active:bg-[#D6A41D] active:shadow-[0px_2px_4px_0px_#E5C36699] focus:border focus:border-purple disabled:text-4-6 disabled:bg-2-6">
          立刻投稿
        </button>
        <h2 className="text-xl font-bold">本頁目錄</h2>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <a
                className={`block ${section.link === selectedSection ? "text-black font-extrabold " : "text-gray-500"}`}
                onClick={() => handleClick(section.link)}
              >
                <div className="w-1 h-1.2em rounded-full bg-[#AC24FF] transition-all duration-300" />
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
}
