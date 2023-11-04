import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
function BackToTopButton({ className }: { className?: string }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const pageHeight = document.body.clientHeight;
    const footerHeight = document.querySelector("footer")?.clientHeight || 0;

    const overScreenHeight = latest > screenHeight;
    const belowFooter = latest < pageHeight - footerHeight - screenHeight;
    setVisible((overScreenHeight && belowFooter) || screenWidth < 1024);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className={twMerge(
        `mx-auto block my-8 lg:fixed lg:m-0 bottom-8 right-8 text-green border border-green rounded-full w-12 h-12 z-50 hover:bg-green hover:text-white transition-all duration-300 ease-in-out`,
        className
      )}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </motion.button>
  );
}

export default BackToTopButton;
