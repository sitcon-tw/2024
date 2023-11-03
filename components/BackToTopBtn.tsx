import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

function BackToTopButton({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (
        document.documentElement.scrollHeight -
          (window.innerHeight + window.scrollY) <
        1200
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div
      className={twMerge(
        `back-to-top fixed bottom-16 right-16 animate-bounce cursor-pointer transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring focus:ring-opacity-50`,
        className
      )}
      onClick={scrollToTop}
    >
      <img className="w-16 h-16" src="/upArrow.png"></img>
    </div>
  );
}

export default BackToTopButton;
