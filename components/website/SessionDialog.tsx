"use client";
import useMediaQuery from "@/hooks/use-media-query";
import { Drawer } from "vaul";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { createPortal } from "react-dom";
import { RemoveScroll } from "react-remove-scroll";
export default function Dialog({
  children,
  open,
  setOpen,
  isOpenByDefault,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenByDefault?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const { isMobile } = useMediaQuery();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  function handleClose() {
    setOpen(false);
    if (isOpenByDefault) {
      history.pushState(
        null,
        "",
        window.location.pathname.split("agenda").slice(0, -1).join("") +
          "agenda/",
      );
    } else {
      history.back();
    }
  }

  return mounted
    ? createPortal(
        <AnimatePresence>
          {open && (
            <RemoveScroll className="fixed inset-0 z-50 overflow-scroll">
              <motion.div
                className="fixed inset-0 cursor-pointer bg-black/50 backdrop-blur"
                onClick={handleClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className={`fixed inset-0 m-auto flex w-screen flex-col overflow-scroll rounded-[10px] bg-transparent md:px-24`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <motion.button
                  onClick={handleClose}
                  className="fixed right-2 top-2 m-2 md:right-16 md:top-16"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoCloseCircle className="text-3xl text-[#ffffff]" />
                </motion.button>
                <div className={` ${isMobile ? "p-4 pt-14" : "px-10 py-20"}`}>
                  {children}
                </div>
              </motion.div>
            </RemoveScroll>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;
}
