"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
export default function Readmore({
  content,
  footer,
}: {
  content: string[];
  footer: string;
}) {
  const [open, setOpen] = useState(false);

  const Line = () => (
    <div className="h-0 w-[10%] rounded border-[2px] border-[#FFB191] " />
  );

  return (
    <div className="grid-row-2 grid place-items-center">
      {/* TODO: this will blink when open */}
      <div className="text-[18px] text-white">
        <div
          style={{
            maskImage: open
              ? "linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)"
              : `linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)`,
          }}
        >
          {content.slice(0, 3).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
            >
              {content.slice(3).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div></div>
      </div>

      <div
        className={twMerge(
          "hidden w-full items-center pt-16 text-2xl  font-bold text-[#FFB191]",
          open && "flex",
        )}
      >
        <div className="md:grow" />
        <Line />
        <div className="grow" />
        <p>{footer}</p>
        <div className="grow" />
        <Line />
        <div className="md:grow" />
      </div>

      <button
        className={twMerge(
          open && "hidden",
          "mt-8 w-fit rounded-2xl border border-white px-8 py-4 text-[18px] text-white shadow-[0px_4px_25px_0px_#FFFFFF4D]",
        )}
        onClick={() => setOpen(true)}
      >
        閱讀更多...
      </button>
    </div>
  );
}
