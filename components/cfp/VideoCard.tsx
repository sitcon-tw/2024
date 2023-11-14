import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faClose } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { twMerge } from "tailwind-merge";
export default function VideoCard({
  id,
  title,
  infoHref,
}: {
  id: string;
  title: string;
  infoHref?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        className="cursor-pointer"
        layoutId={`video-card-${id}`}
      >
        <motion.div
          className="relative aspect-video w-full rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          style={{
            backgroundImage: `url(/2024/cfp/video-image/${id}.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
        />
        <div className="relative leading-6 mt-1">{title}</div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed top-0 left-0 w-full h-full z-[60] flex justify-center items-center">
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-md cursor-pointer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="bg-white w-[min(512px,90vw)] p-4 relative rounded-2xl shadow-2xl"
              layoutId={`video-card-${id}`}
            >
              <div className="relative text-2xl font-bold mb-4 flex justify-between items-start gap-4">
                議程
                <button
                  className="bg-gray-100 bg-opacity-50 text-gray-400 rounded-full aspect-square w-8 h-8 flex justify-center items-center hover:bg-gray-200 active:bg-gray-300 transition-all"
                  onClick={() => setOpen(false)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
              <iframe
                className="relative aspect-video w-full rounded-lg"
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="relative mt-2 flex justify-between items-center gap-2 flex-wrap">
                <div className="text-xl font-bold">{title}</div>
                <div className="flex gap-2">
                  {infoHref && (
                    <a
                      className={twMerge(
                        `bg-gold bg-opacity-20 text-gold`,
                        "px-2 py-1 gap-2",
                        "rounded-full transition-all flex items-center justify-center leading-5 hover:opacity-80 active:opacity-70 break-keep"
                      )}
                      target="_blank"
                      href={infoHref}
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      議程資訊
                    </a>
                  )}
                  <a
                    className={twMerge(
                      `bg-red-500 bg-opacity-20 text-red-500`,
                      "px-2 py-1 gap-2",
                      "rounded-full transition-all flex items-center justify-center leading-5 hover:opacity-80 active:opacity-70 break-keep"
                    )}
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${id}`}
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
