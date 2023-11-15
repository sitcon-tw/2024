import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useVelocity,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faClose } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { twMerge } from "tailwind-merge";
import { useWindowSize } from "usehooks-ts";
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
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  const y = useMotionValue(0);
  const yVelocity = useVelocity(y);
  const zIndex = useMotionValue(open ? 2 : 0);
  function checkSwipeToDismiss() {
    if (yVelocity.get() > 300) {
      setOpen(false);
    }
  }
  function checkZIndex(latest: any) {
    if (open) {
      zIndex.set(2);
    } else if (!open && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }

  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-2xl"
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
        <div className="relative mt-1 text-sm leading-5">{title}</div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed top-0 left-0 w-full h-full z-[60] flex justify-center items-end md:items-center">
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm cursor-pointer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="bg-white w-[min(512px,100vw)] h-max p-4 relative m-1 rounded-2xl drop-shadow-2xl flex flex-col"
              layoutId={`video-card-${id}`}
              drag={isMobile ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              onDrag={checkSwipeToDismiss}
              style={{ y, zIndex }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
              }}
              dragElastic={0.5}
              onUpdate={checkZIndex}
            >
              <div className="bg-gray-200 w-[96px] h-[4px] rounded-full mb-4 self-center md:hidden" />
              <button
                className={twMerge(
                  "absolute top-5 right-5 z-10",
                  "bg-gray-100 bg-opacity-80 backdrop-blur-xl text-gray-400 rounded-md justify-center items-center gap-2 hover:bg-gray-200 active:bg-gray-300 transition-all w-8 h-8 aspect-square shadow-2xl hidden md:flex"
                )}
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>

              <iframe
                className="relative aspect-video w-full rounded-lg"
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  backgroundImage: `url(/2024/cfp/video-image/${id}.webp)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              />
              <div className="text-xl font-bold mt-2">{title}</div>
              <div className="flex gap-2 mt-2">
                {infoHref && (
                  <a
                    className={twMerge(
                      `bg-gold bg-opacity-20 text-gold`,
                      "px-2 py-1 gap-2",
                      "rounded-lg transition-all flex items-center justify-center leading-5 hover:opacity-80 active:opacity-70 break-keep"
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
                    "rounded-lg transition-all flex items-center justify-center leading-5 hover:opacity-80 active:opacity-70 break-keep"
                  )}
                  target="_blank"
                  href={`https://www.youtube.com/watch?v=${id}`}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                  YouTube
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
