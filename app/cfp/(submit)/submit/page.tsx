"use client";
import { useReducer } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Title from "@/components/cfp/Title";
import Event, { EventType } from "@/components/cfp/Event";

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

export default function Page() {
  const [type, toggleType] = useReducer(
    (state: EventType | "", action: EventType | "") => {
      if (state === "") return action;
      if (state === action) return "";
      else return action;
    },
    ""
  );

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <Title>投稿頁面</Title>

      {/* count down */}
      <Countdown />
      {/* submit botton */}
      <div className="flex justify-center">
        <button className="bg-gold text-xl font-bold text-white h-[60px] w-[196px] rounded-full hover:shadow-[0px_4px_16px_0px_#E5C366CC] active:bg-[#D6A41D] active:shadow-[0px_2px_4px_0px_#E5C36699] focus:border focus:border-purple disabled:text-4-6 disabled:bg-2-6">
          立刻投稿
        </button>
      </div>

      {/* time table */}
      <div className="flex flex-col gap-4 pt-16">
        <div className="flex items-center gap-6 flex-wrap max-w-[512px]">
          <div>
            <h2 className="text-[32px] font-medium">時程表</h2>
          </div>
          <div className="flex grow place-content-between">
            <button
              className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-purple ${
                type === "general"
                  ? "text-purple bg-white"
                  : "text-white bg-purple"
              }`}
              onClick={() => toggleType("general")}
            >
              一般議程
            </button>
            <button
              className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-pink ${
                type === "undefined"
                  ? "text-pink bg-white"
                  : "text-white bg-pink"
              }`}
              onClick={() => toggleType("undefined")}
            >
              開放式議程
            </button>
            <button
              className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-green ${
                type === "poster"
                  ? "text-green bg-white"
                  : "text-white bg-green"
              }`}
              onClick={() => toggleType("poster")}
            >
              海報
            </button>
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

      {/* hero bg image */}
      <div className="w-[calc(100vw-70%)] xl:w-[calc(100vw-60%)] h-[900px] overflow-hidden top-0 left-0 mt-[920px] ml-[70%] xl:ml-[60%] absolute -z-10 hidden lg:block">
        <Image
          src="/hero_bg.webp"
          width={1857}
          height={1998}
          alt=""
          className="max-w-[unset]"
        />
      </div>
    </div>
  );
}
