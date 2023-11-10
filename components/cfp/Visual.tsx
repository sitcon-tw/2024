import Link from "next/link";
import useCountdown from "@/hooks/useCountdown";
import { motion, AnimatePresence } from "framer-motion";
function CountDownItem({ time }: { time: string }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={time}
        initial={{ opacity: 0, y: "-0.25em", scaleY: 0.5 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        exit={{ opacity: 0, y: "0.25em", scaleY: 0.5 }}
      >
        {time}
      </motion.span>
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
      <div className="pb-4 flex flex-col gap-4 relative container h-full">
        <div className="lg:absolute top-8 left-8 flex items-start justify-center flex-col">
          <div className="text-[96px] font-black leading-[1em] lg:text-[256px]">
            CFP
          </div>
          <div className="tracking-[.5em] lg:tracking-[1em] lg:text-[24px]">
            CALL FOR PAPER
          </div>
        </div>
        <div className="flex flex-col tracking-widest mt-4 lg:absolute bottom-8 left-8 lg:text-[24px] lg:mt-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          <div>SITCON 2024</div>
          <div className="text-[2.5em] leading-[1.25em]">03.09</div>
          <div className="border-t-2 border-[#1E1E1E] pt-[0.5em] w-max">
            中央研究院
            <br />
            人文社會科學館
          </div>
        </div>
        <div className="flex-grow" />
        <div className="lg:absolute right-8 bottom-8 lg:w-[350px] flex flex-col gap-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          <div className="border-l-2 border-r-2 border-[#1E1E1E] text-2xl text-center mb-4 lg:mb-8 w-max self-center px-4  lg:text-[32px] lg:tracking-widest lg:w-full">
            稿件徵求中
          </div>
          <div className="text-sm lg:text-base text-center">
            距離投稿截止還有
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-full border border-[#E5C366] text-[#E5C366] p-4 text-3xl lg:text-4xl text-center tabular-nums tracking-[.1em]">
            <CountDownItem time={days} />:<CountDownItem time={hours} />:
            <CountDownItem time={minutes} />:<CountDownItem time={seconds} />
          </div>
          <Link
            href="/cfp/submit"
            className="rounded-full bg-[#1E1E1E] text-2xl text-center text-white p-4 hover:bg-opacity-90 active:bg-opacity-80"
          >
            前往查看
          </Link>
        </div>
      </div>
    </div>
  );
}
