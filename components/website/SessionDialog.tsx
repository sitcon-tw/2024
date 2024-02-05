"use client";
import useMediaQuery from "@/hooks/use-media-query";
import { Drawer } from "vaul";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { createPortal } from "react-dom";

export default function Dialog({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [mounted, setMounted] = useState(false);
  const { isMobile } = useMediaQuery();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = open ? "hidden" : "auto";
    }
  }, [open]);
  if (isMobile) {
    return (
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-max max-h-[90vh] flex-col rounded-t-[10px] bg-[#F8F3E8]">
            <div className="m-auto mt-3 h-1.5 w-20 rounded-full bg-black/20" />
            <div className="max-h-[80vh] overflow-y-auto">{children}</div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return mounted
    ? createPortal(
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-50 overflow-scroll">
              <motion.div
                className="fixed inset-0 cursor-pointer bg-black/50 backdrop-blur"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="fixed inset-0 m-auto flex w-screen px-24 flex-col rounded-[10px] bg-transparent overflow-scroll"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <motion.button
                  onClick={() => setOpen(false)}
                  className="fixed right-16 top-16 m-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoCloseCircle className="text-3xl text-[#ffffff]" />
                </motion.button>
                <div className="px-10 py-20">
                  {children}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;
}