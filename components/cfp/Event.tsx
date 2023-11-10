import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
export type EventTime = [number, string, number | string];

export type EventType = "general" | "undefined" | "poster" | "SITCON";

export type EventProp = {
  time: EventTime;
  // [2023, 'Nov.', 19]
  // [2023, 'Nov.', 下旬]
  endTime?: EventTime;
  type: EventType[];
  selectedType?: EventType | "";
  name: string;
  desc?: string;
};

function zero(n: number | string) {
  if (typeof n === "string") return n;
  if (n < 10) return `0${n}`;
  return `${n}`;
}

function Time({ time, isGray }: { time: EventTime; isGray: boolean }) {
  return (
    <div className="flex h-min p-2">
      <div className="flex flex-col">
        <div
          className={twMerge(
            "transition-colors",
            isGray ? "text-1-6" : "text-4-6"
          )}
        >
          {time[0]}
        </div>
        <div
          className={twMerge(
            "text-2xl transition-colors",
            isGray ? "text-1-6" : "text-4-6"
          )}
        >
          {time[1]}
        </div>
      </div>

      <div
        className={twMerge(
          "flex flex-col justify-end items-center transition-colors",
          typeof time[2] === "string" ? "text-2xl" : "text-3xl lg:text-5xl",
          isGray ? "text-1-6" : "text-4-6"
        )}
      >
        <div>{zero(time[2])}</div>
      </div>
    </div>
  );
}

export default function Event({
  time,
  endTime,
  type,
  selectedType,
  name,
  desc,
}: EventProp) {
  const typeColor = {
    general: "bg-purple",
    undefined: "bg-pink",
    poster: "bg-green",
    SITCON: "bg-blue",
  };

  const isGray = !!(
    selectedType &&
    !type.includes("SITCON") &&
    !type.includes(selectedType)
  );

  return (
    <div className="lg:min-h-[110px] max-w-[512px] flex border border-1-6 rounded-lg shadow-[0px_4px_8px_0px_#0000001A] mb-6 bg-white">
      <div className="flex flex-col">
        {type.map((type) => (
          <motion.div
            key={type}
            layout
            layoutId={selectedType}
            className={twMerge(
              "w-[5px] flex-grow first:rounded-tl-[3.5px] last:rounded-bl-[3.5px] transition-colors",
              selectedType ? typeColor[selectedType] : typeColor[type],
              isGray && "bg-1-6"
            )}
          />
        ))}
      </div>

      <div>
        <Time time={time} isGray={isGray} />

        {endTime ? (
          <>
            <div
              className={twMerge(
                "border border-white w-[94px] h-[37px] transition-colors",
                isGray ? "border-r-1-6" : "border-r-4-6"
              )}
            />
            <Time time={endTime} isGray={isGray} />
          </>
        ) : null}
      </div>

      <div className="text-4-6 my-2 mx-4 flex flex-col self-center">
        <span
          className={twMerge(
            "text-xl lg:text-[32px] font-bold transition-colors",
            isGray && "text-1-6"
          )}
        >
          {name}
        </span>
        <span className={twMerge("transition-colors", isGray && "text-1-6")}>
          {desc}
        </span>
      </div>
    </div>
  );
}
