"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const varients = {
  pink: {
    bg: "bg-pink",
    text: "text-pink",
    border: "border-pink",
    shadow: "shadow-md shadow-[#FF3495]/30",
  },
  purple: {
    bg: "bg-purple",
    text: "text-purple",
    border: "border-purple",
    shadow: "shadow-md shadow-[#AC24FF]/30",
  },
  green: {
    bg: "bg-green",
    text: "text-green",
    border: "border-green",
    shadow: "shadow-md shadow-[#0CE295]/30",
  },
};

export default function Card({
  title,
  children,
  varient,
  className,
}: {
  title: string;
  children: React.ReactNode;
  varient: "pink" | "purple" | "green";
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const filter = useTransform(
    scrollYProgress,
    [0.8, 0.9],
    ["blur(4px)", "blur(0px)"]
  );
  const textScale = useTransform(scrollYProgress, [0.8, 0.9], [2, 1]);
  return (
    <div
      className={twMerge("relative justify-center flex", className)}
      ref={ref}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full rounded-lg bg-gold text-white flex text-center text-2xl font-bold items-center justify-center pointer-events-none overflow-hidden"
        style={{
          opacity,
          filter,
          zIndex: 1,
        }}
      >
        <motion.span
          style={{
            scale: textScale,
          }}
        >
          {title}
        </motion.span>
      </motion.div>
      <div
        className={`rounded-lg border ${varients[varient].border} ${varients[varient].shadow} p-6 w-full relative`}
      >
        <h1 className={`${varients[varient].text} font-bold text-2xl`}>
          {title}
        </h1>
        <p className={`mt-2 ${varients[varient].text}`}>{children}</p>
      </div>
    </div>
  );
}
