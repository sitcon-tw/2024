"use client";
import { useReducer, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Title from "@/components/cfp/Title";
import Event, { EventType } from "@/components/cfp/Event";
import Link from "next/link";
import useCountdown from "@/hooks/useCountdown";
function CountdownItem({
  time,
  label,
  timeClassName,
}: {
  time: string;
  label: string;
  timeClassName?: string;
}) {
  return (
    <div className="leading-[1em] flex flex-col justify-center items-center gap-2">
      <AnimatePresence mode="popLayout">
        <motion.div
          className={twMerge(
            "text-[32px] lg:text-[64px] leading-[1em]",
            timeClassName
          )}
          key={time}
          initial={{ opacity: 0, y: "-0.25em", scaleY: 0.5 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          exit={{ opacity: 0, y: "0.25em", scaleY: 0.5 }}
        >
          {time}
        </motion.div>
      </AnimatePresence>
      <div className="font-medium text-[10px] lg:text-[16px] leading-[1em] text-gold">
        {label}
      </div>
    </div>
  );
}

function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p>距離投稿截止還有：</p>
      <div className="w-full border-gold border-2 rounded-full py-7 px-14 lg:py-[50px] lg:px-[100px] grid grid-cols-4 leading-7">
        <CountdownItem time={days} label="DAYS" timeClassName="text-pink" />
        <CountdownItem time={hours} label="HOURS" timeClassName="text-purple" />
        <CountdownItem
          time={minutes}
          label="MINUTES"
          timeClassName="text-blue"
        />
        <CountdownItem
          time={seconds}
          label="SECONDS"
          timeClassName="text-green"
        />
      </div>
      <div>
        <p className="font-bold">截止日期</p>
        <p>即日起至 2024 年 1 月 20 日（六）23:59</p>
      </div>
    </div>
  );
}
function HeroBgImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [250, 100, 0]);
  const skew = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div
      className="w-[calc(100vw-70%)] xl:w-[calc(100vw-60%)] -z-10 fixed bottom-0 right-0"
      ref={ref}
    >
      <motion.img
        src="/2024/cfp/hero_corner.webp"
        className="w-full"
        style={{
          x,
          y,
          skew,
        }}
      />
    </div>
  );
}
function ToButton({
  bgColor,
  children,
  href,
}: {
  bgColor: string;
  children: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={twMerge(
        bgColor,
        "px-4 pt-10 pb-2 text-center w-full lg:w-[192px] text-xl text-white rounded-lg transition-colors hover:bg-opacity-80 active:bg-opacity-100 group",
        "flex justify-between items-center"
      )}
    >
      {children}
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ml-2 group-hover:translate-x-1 transition-transform"
      />
    </Link>
  );
}
function ToggleButton({
  type,
  toggleType,
  children,
  bgColor,
  buttonType,
}: {
  type: EventType;
  toggleType: (type: EventType) => void;
  children: string;
  bgColor: string;
  buttonType: string;
}) {
  return (
    <motion.button
      className={twMerge(
        `rounded-full px-4 py-1 flex justify-center items-center gap-2 transition-colors relative group`,
        type === buttonType
          ? `text-white`
          : `text-gray-500 hover:text-gray-600 active:text-gray-700`
      )}
      onClick={() => toggleType(type)}
      whileTap={{
        scale: 0.9,
      }}
    >
      <div
        className={twMerge(
          type === buttonType ? "bg-white" : bgColor,
          "w-1.5 h-1.5 rounded-full transition-all group-hover:scale-125"
        )}
      />
      {children}
      <AnimatePresence>
        {type === buttonType && (
          <motion.div
            className={twMerge(
              "w-full h-full rounded-full absolute top-0 left-0 -z-10",
              bgColor
            )}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
export default function Page() {
  const [type, toggleType] = useReducer(
    (state: EventType | "", action: EventType | "") =>
      state === action ? "" : action,
    ""
  );

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <Title>投稿頁面</Title>

      {/* count down */}
      <Countdown />
      {/* submit botton */}
      <div className="flex justify-center items-center relative flex-col lg:flex-row gap-2">
        <ToButton bgColor="bg-purple" href="/cfp/normal">
          一般議程
        </ToButton>
        <ToButton bgColor="bg-pink" href="/cfp/undefined">
          開放式議程
        </ToButton>
        <ToButton bgColor="bg-green" href="/cfp/poster">
          海報
        </ToButton>
      </div>

      {/* time table */}
      <div className="flex flex-col gap-4 pt-16">
        <div className="flex items-center gap-6 flex-wrap max-w-[512px]">
          <div>
            <h2 className="text-[32px] font-medium">時程表</h2>
          </div>
          <div className="flex -gap-2">
            <ToggleButton
              type="general"
              toggleType={toggleType}
              bgColor="bg-purple"
              buttonType={type}
            >
              一般議程
            </ToggleButton>
            <ToggleButton
              type="undefined"
              toggleType={toggleType}
              bgColor="bg-pink"
              buttonType={type}
            >
              開放式議程
            </ToggleButton>
            <ToggleButton
              type="poster"
              toggleType={toggleType}
              bgColor="bg-green"
              buttonType={type}
            >
              海報
            </ToggleButton>
          </div>
        </div>

        <div>
          <Event
            time={[2023, "Nov.", 19]}
            type={["general", "undefined", "poster"]}
            selectedType={type}
            name="開始徵稿"
          />
          <Event
            time={[2024, "Jan.", 20]}
            type={["general", "undefined", "poster"]}
            selectedType={type}
            name="投稿截止"
            desc="至 2024 年 1 月 20 日（六）23:59"
          />
          <Event
            time={[2024, "Jan.", "下旬"]}
            type={["general", "undefined", "poster"]}
            selectedType={type}
            name="稿件錄取通知"
          />
          <Event
            time={[2024, "Jan.", "下旬"]}
            endTime={[2024, "Feb.", "中旬"]}
            type={["general", "undefined"]}
            selectedType={type}
            name="試講"
            desc="若稿件入選，確切時間將再與您協調"
          />
          <Event
            time={[2024, "Feb.", 18]}
            type={["poster"]}
            selectedType={type}
            name="錄取海報檔案上傳截止"
          />
          <Event
            time={[2024, "Mar.", 8]}
            type={["general", "undefined"]}
            selectedType={type}
            name="彩排"
          />
          <Event
            time={[2024, "Mar.", 9]}
            type={["SITCON"]}
            selectedType={type}
            name="年會"
          />
        </div>
      </div>

      <HeroBgImage />
    </div>
  );
}
