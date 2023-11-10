import { twMerge } from "tailwind-merge";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
export default function SubmissionBtn({ href }: { href: string }) {
  const { scrollY } = useScroll();
  const [pageHeight, setPageHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [show, setShow] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const page = document.querySelector("body");
    const footer = document.querySelector("footer");
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    if (page) {
      setPageHeight(page.clientHeight);
    }
    if (footer) {
      setFooterHeight(footer.clientHeight);
    }
    if (screenWidth >= 1024) return;
    setShow(latest + screenHeight + footerHeight < pageHeight);
  });
  return (
    <>
      <div
        className={twMerge(
          "fixed lg:relative bottom-0 left-0 w-full p-2 flex items-center justify-center lg:p-0 z-50",
          "transition-all duration-500 ease-in-out",
          !show && "translate-y-[100%] opacity-0"
        )}
      >
        <div
          className="absolute h-full w-full bg-white -z-10 bg-opacity-80 backdrop-blur-xl"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
          }}
        />
        <a
          className={twMerge(
            "bg-gold text-xl font-bold text-white w-full rounded-full hover:bg-opacity-90 active:bg-opacity-80 p-2 text-center"
          )}
          href={href}
          target="_blank"
        >
          立刻投稿
        </a>
      </div>
    </>
  );
}
