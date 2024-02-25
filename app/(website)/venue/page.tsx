"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import useIsApp from "@/hooks/useIsApp";
import Dialog from "@/components/website/Dialog";
import Button from "@/components/website/button";
import Markdown from "react-markdown";
import venueData from "./venueData";
function NumberInfo({
  item,
}: {
  item: {
    number: string;
    title: string;
    image?: string;
    description: string;
    url?: string;
    urls?: { title: string; url: string }[];
  };

  children?: React.ReactNode;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <div
        className="flex cursor-pointer gap-3 rounded-sm leading-7 hover:bg-[#B1884C]/10 active:bg-[#B1884C]/20"
        aria-role="button"
        tabIndex={0}
        onClick={() => setIsDialogOpen(true)}
      >
        <h2 className="flex w-14 shrink-0 items-center justify-center rounded-sm bg-[#B1884C] text-center text-3xl tabular-nums text-white">
          {item.number}
        </h2>
        <div className="pr-1">
          <h3 className="font-bold text-[#B1884C]">{item.title}</h3>
          <p className="line-clamp-2 text-ellipsis text-sm">
            <Markdown>{item.description}</Markdown>
          </p>
        </div>
      </div>
      <Dialog open={isDialogOpen} setOpen={setIsDialogOpen}>
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center justify-start gap-3 text-2xl font-bold md:text-3xl">
            <h2 className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#B1884C] text-center text-2xl tabular-nums text-white">
              {item.number}
            </h2>
            {item.title}
          </div>
          {item?.image && (
            <img
              src={`/2024/sponsor/${item.image}`}
              className="mx-auto w-full max-w-[240px] rounded"
              alt={item.title}
            />
          )}
          <div className="md:max-h-[80vh] md:overflow-y-auto">
            <Markdown>{item.description}</Markdown>
          </div>
          {(item.url || item.urls) && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {item.url && (
                <Button
                  color="blue"
                  url={item.url}
                  className="text-base md:text-xl"
                >
                  前往網站
                </Button>
              )}
              {item.urls &&
                item.urls.map((x) => (
                  <Button
                    key={x.title}
                    color="blue"
                    url={x.url}
                    className="text-base md:text-xl"
                  >
                    {x.title}
                  </Button>
                ))}
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
function Floor2Info() {
  return (
    <div className="flex flex-col gap-3">
      {venueData["2"].map((item, index) => (
        <NumberInfo item={item} key={index} />
      ))}
    </div>
  );
}
function Floor3Info() {
  return (
    <div className="flex flex-col gap-3">
      {venueData["3"].map((item, index) => (
        <NumberInfo item={item} key={index} />
      ))}
    </div>
  );
}
function Floor4Info() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {venueData["4"].map((item, index) => (
        <NumberInfo item={item} key={index} />
      ))}
    </div>
  );
}

function FloorButton({
  floor,
  currentFloor,
  setFloor,
}: {
  floor: 2 | 3 | 4;
  currentFloor: 2 | 3 | 4;
  setFloor: (floor: 2 | 3 | 4) => void;
}) {
  return (
    <button
      className={twMerge(
        "relative w-full py-1 text-center font-bold text-[#B1884C] md:py-2 md:text-xl lg:text-2xl",
      )}
      onClick={() => setFloor(floor)}
    >
      {floor}F
      <AnimatePresence>
        {floor === currentFloor && (
          <motion.div
            className="absolute bottom-0 h-[2px] w-full rounded-t-full bg-[#B1884C]"
            layoutId="floor-indicator"
          />
        )}
      </AnimatePresence>
    </button>
  );
}
export default function Page() {
  const [floor, setFloor] = useState<2 | 3 | 4>(3);
  const isApp = useIsApp();
  useEffect(() => {
    // scroll to top when floor changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [floor]);
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h1
          className="mb-4 w-full text-left text-2xl font-bold md:text-4xl"
          id="page-title"
        >
          會場地圖
        </h1>
      </div>
      <div
        className={twMerge(
          "z-10 overflow-x-hidden bg-[#F8F3E8]/90 backdrop-blur-lg max-lg:sticky",
          isApp ? "top-0" : "top-[80px]",
        )}
      >
        <div
          style={{
            boxShadow: "0 4px 2px -2px #B1884C40",
          }}
        >
          <div className="container flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex w-full gap-2">
              <FloorButton floor={2} currentFloor={floor} setFloor={setFloor} />
              <FloorButton floor={3} currentFloor={floor} setFloor={setFloor} />
              <FloorButton floor={4} currentFloor={floor} setFloor={setFloor} />
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center py-4 md:gap-4"
          style={{
            transform: `translateX(calc(-100% * ${floor - 3}))`,
            transition: "transform 0.5s",
          }}
        >
          <div className="w-full shrink-0">
            <div className="container gap-4 lg:grid lg:grid-cols-4">
              <img
                src="/2024/floor/2f.svg"
                alt="2F"
                className="w-full lg:col-span-3"
              />
              <div className="hidden lg:block">
                <Floor2Info />
              </div>
            </div>
          </div>
          <div className="w-full shrink-0">
            <div className="container gap-4 lg:grid lg:grid-cols-4">
              <img
                src="/2024/floor/3f.svg"
                alt="3F"
                className="w-full lg:col-span-3"
              />
              <div className="hidden lg:block">
                <Floor3Info />
              </div>
            </div>
          </div>
          <div className="w-full shrink-0">
            <div className="container gap-4 lg:grid lg:grid-cols-2">
              <img
                src="/2024/floor/4f.svg"
                alt="4F"
                className="sticky top-0 w-full self-start"
              />
              <div className="hidden lg:block">
                <Floor4Info />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <AnimatePresence mode="sync">
          {floor === 2 && (
            <motion.div
              className="container overflow-y-hidden"
              key={2}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Floor2Info />
            </motion.div>
          )}
          {floor === 3 && (
            <motion.div
              className="container overflow-y-hidden"
              key={3}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Floor3Info />
            </motion.div>
          )}
          {floor === 4 && (
            <motion.div
              className="container overflow-y-hidden"
              key={4}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Floor4Info />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
