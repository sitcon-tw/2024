"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
export default function Question({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 border-b-[#E5C366] border-b">
      <p
        className="cursor-pointer font-bold flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {question}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={twMerge("mx-4 transition-transform", open && "rotate-180")}
        />
      </p>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
              overflow: "hidden",
            }}
            animate={{
              height: "auto",
              opacity: 1,
              overflow: "visible",
            }}
            exit={{
              height: 0,
              opacity: 0,
              overflow: "hidden",
            }}
          >
            <p className="pt-2">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
