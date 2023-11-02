import Link from "next/link";
import useCountdown from "@/hooks/useCountdown";
export default function Visual() {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <div
      className="h-[calc(100svh-64px)] min-h-[768px] bg-white bg-cover bg-[left_20%_center] lg:bg-center relative p-4 flex flex-col gap-4 "
      style={{
        backgroundImage: `url('/intro.webp')`,
      }}
    >
      <div className="lg:absolute top-8 left-8 flex items-start justify-center flex-col">
        <div className="text-[128px] font-black leading-[1em] lg:text-[256px]">
          CFP
        </div>
        <div className="tracking-[.5em] lg:tracking-[1em] lg:text-[24px]">
          CALL FOR PAPER
        </div>
      </div>
      <div className="flex flex-col tracking-widest mt-16 lg:absolute bottom-8 left-8 lg:text-[24px] lg:mt-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
        <div>SITCON 2024</div>
        <div className="text-[2.5em]">03.09</div>
        <div className="border-t-2 border-[#1E1E1E] pt-[0.5em] w-max">
          中央研究院
          <br />
          人文社會科學館
        </div>
      </div>
      <div className="flex-grow" />
      <div className="lg:absolute right-8 bottom-8 lg:w-[350px] flex flex-col gap-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
        <div className="border-l-2 border-r-2 border-[#1E1E1E] text-2xl text-center mb-20 lg:mb-8 w-max self-center px-4  lg:text-[32px] lg:tracking-widest lg:-translate-x-[0.1em] lg:w-full">
          稿件徵求中
        </div>
        <div className="text-sm text-center">距離投稿截止還有：</div>
        <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-full border border-[#E5C366] text-[#E5C366] p-4 text-2xl lg:text-4xl text-center tabular-nums tracking-[.1em] lg:-translate-x-[.1em]">
          {days}:{hours}:{minutes}:{seconds}
        </div>
        <Link
          href="/cfp/submit"
          className="rounded-full bg-[#1E1E1E] text-2xl text-center text-white p-4"
        >
          前往查看
        </Link>
      </div>
    </div>
  );
}
