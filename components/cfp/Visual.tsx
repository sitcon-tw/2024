import Link from "next/link";
import useCountdown from "@/hooks/useCountdown";
import { motion, AnimatePresence } from "framer-motion";
function CountDownItem({ time }: { time: string }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={time}
        initial={{
          opacity: 0,
          y: "-0.25em",
          scaleY: 0.75,
          filter: "blur(0.1em)",
          transformOrigin: "top",
        }}
        animate={{ opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" }}
        exit={{
          opacity: 0,
          y: "0.25em",
          scaleY: 0.75,
          filter: "blur(0.1em)",
          transformOrigin: "bottom",
        }}
      >
        {time}
      </motion.div>
    </AnimatePresence>
  );
}
export default function Visual() {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <div
      className="h-[calc(100svh-64px)] min-h-[614px] bg-white bg-cover bg-[left_20%_center] lg:bg-center"
      style={{
        backgroundImage: `url('/2024/cfp/intro.webp')`,
      }}
    >
      <div className="container relative flex h-full flex-col gap-4 pb-4">
        <div className="left-8 top-8 flex flex-col items-start justify-center lg:absolute">
          <div className="text-[96px] font-black leading-[1em] lg:text-[256px]">
            CFP
          </div>
          <div className="tracking-[.5em] lg:text-[24px] lg:tracking-[1em]">
            CALL FOR PAPER
          </div>
        </div>
        <div className="bottom-8 left-8 mt-4 flex flex-col tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] lg:absolute lg:mt-0 lg:text-[24px]">
          <div>SITCON 2024</div>
          <div className="text-[2.5em] leading-[1.25em]">03.09</div>
          <div className="w-max border-t-2 border-[#1E1E1E] pt-[0.5em]">
            中央研究院
            <br />
            人文社會科學館
          </div>
        </div>
        <div className="flex-grow" />
        <div className="bottom-8 right-8 flex flex-col gap-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] lg:absolute lg:w-[350px]">
          <div className="mb-4 w-max self-center border-l-2 border-r-2 border-[#1E1E1E] px-4 text-center text-2xl lg:mb-8  lg:w-full lg:text-[32px] lg:tracking-widest">
            稿件徵求中
          </div>
          <div className="text-center text-sm lg:text-base">
            距離海報投稿截止還有
          </div>
          <div className="flex items-center justify-center rounded-full border border-[#E5C366] bg-white bg-opacity-90 p-4 text-3xl tabular-nums tracking-[.1em] text-[#E5C366] backdrop-blur-xl lg:text-4xl">
            <CountDownItem time={days} />:<CountDownItem time={hours} />:
            <CountDownItem time={minutes} />:<CountDownItem time={seconds} />
          </div>
          <Link
            href="/cfp/poster"
            className="rounded-full bg-[#1E1E1E] p-4 text-center text-2xl text-white hover:bg-opacity-90 active:bg-opacity-80"
          >
            前往查看
          </Link>
        </div>
      </div>
    </div>
  );
}
