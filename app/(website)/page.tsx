"use client";
import Button from "@/components/website/button";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
function Readmore({ content, footer }: { content: string[]; footer: string }) {
  const [open, setOpen] = useState(false);

  const Line = () => (
    <div className="h-0 w-[10%] rounded border-[2px] border-[#FFB191] " />
  );

  return (
    <div className="grid-row-2 grid place-items-center">
      {/* TODO: this will blink when open */}
      <div className="text-[18px] text-white">
        {content.slice(0, 2).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <p
          className={twMerge(
            !open &&
              "bg-gradient-to-b from-white from-5% to-transparent bg-clip-text text-transparent",
          )}
        >
          {content[2]}
        </p>
        {content.slice(3).map((item, index) => (
          <p key={index} className={twMerge(!open && "hidden")}>
            {item}
          </p>
        ))}
        <div></div>
      </div>

      <div
        className={twMerge(
          "hidden w-full items-center pt-16 text-2xl  font-bold text-[#FFB191]",
          open && "flex",
        )}
      >
        <div className="md:grow" />
        <Line />
        <div className="grow" />
        <p>{footer}</p>
        <div className="grow" />
        <Line />
        <div className="md:grow" />
      </div>

      <button
        className={twMerge(
          open && "hidden",
          "mt-8 w-fit rounded-2xl border border-white px-8 py-4 text-[18px] text-white shadow-[0px_4px_25px_0px_#FFFFFF4D]",
        )}
        onClick={() => setOpen(true)}
      >
        閱讀更多...
      </button>
    </div>
  );
}

function Heading({ chinese, english }: { chinese: string; english: string }) {
  return (
    <>
      <h1 className="pb-[12px] pt-[110px] text-3xl font-bold md:pb-[30px] md:pt-[120px] md:text-5xl">
        {chinese}
      </h1>
      <h2 className="pb-[40px] text-2xl font-bold md:pb-[56px] md:text-4xl">
        {english}
      </h2>
    </>
  );
}

export default function Page() {
  return (
    <div className="overflow-hidden">
      {/* title */}
      {/* TODO: style this section */}
      <div className="relative z-[5] min-h-[460px]">
        <img
          src="/2024/website/title_bg.png"
          width={5760}
          height={3024}
          alt=""
          className="pointer-events-none absolute top-[-15%] w-[150%] max-w-none select-none opacity-20 md:top-[-30%] md:w-[100%]"
        />
        <img
          src="/2024/website/title.svg"
          width={1440}
          height={795}
          alt=""
          className="pointer-events-none absolute left-0 top-4 w-[130%] max-w-none select-none md:left-12 md:top-0 md:w-[90%]"
        />
        {/* <img */}
        {/*   src="/2024/website/title_desktop.png" */}
        {/*   width={428} */}
        {/*   height={529} */}
        {/*   alt="" */}
        {/*   className="absolute -top-12 hidden w-[180%] md:block lg:-top-[7rem]" */}
        {/* /> */}
        <img
          src="/2024/website/ellipse.png"
          width={150 * 0.8}
          height={238 * 0.8}
          alt=""
          className="pointer-events-none absolute bottom-[1.5rem] right-0 select-none md:bottom-0 md:right-[8rem] md:scale-[2.5] lg:right-[12rem]"
        />

        <img
          src="/2024/website/flame.png"
          width={150 * 0.8}
          height={238 * 0.8}
          alt=""
          className="pointer-events-none absolute bottom-[1.5rem] right-0 select-none md:bottom-0 md:right-[8rem] md:scale-[2.5] lg:right-[12rem]"
        />

        <h1 className="absolute right-8 top-4 text-xl font-bold text-[#061740] md:right-24 md:top-16 md:text-2xl">
          SITCON 學生計算機年會 2024
        </h1>
        <div className="absolute left-8 top-[290px] md:left-[160px] md:top-[490px]">
          <h1 className="pb-4 text-2xl font-bold text-black md:text-3xl">
            2024.03.09
          </h1>
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            中央研究院 人文社會科學館
          </h1>
        </div>
        {/* two buttons */}
        <div className="absolute bottom-0 grid w-full grid-cols-2 gap-5 px-8 md:-bottom-24 md:right-8 md:w-[40%] lg:w-[30%]">
          <Button color="yellow" url="/signup">
            活動報名
          </Button>
          <Button color="yellow" url="/sponsor">
            支持我們
          </Button>
        </div>
      </div>
      {/* theme */}
      <div className="relative -my-[120px] bg-[#061740] px-8 py-[360px] md:px-[160px]">
        <div
          className="absolute left-0 top-0 h-[600px] w-full -translate-y-6 bg-[#F8F3E8]"
          style={{
            maskImage:
              "linear-gradient(-15deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 50%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-[600px] w-full bg-[#F8F3E8]"
          style={{
            maskImage:
              "linear-gradient(-15deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 60%)",
          }}
        />
        <div className="relative pt-40 md:pb-[200px]">
          <img
            src="/2024/website/bg-texture.png"
            width={2048}
            height={2048}
            alt=""
            className="t-[-4rem] absolute left-[-12rem] top-[-25%] z-0 h-full max-w-none rotate-[-14deg] select-none  opacity-10"
          />
          <img
            src="/2024/website/flame_opacity.png"
            width={153}
            height={253}
            alt=""
            className="absolute bottom-[-50rem] left-0 right-0 top-0 z-0 m-auto select-none  md:-bottom-16"
          />

          <div className="relative z-[5]">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              年會主題
            </h1>
            <img
              src="/2024/website/human after all.png"
              width={370}
              height={41.84}
              alt=""
              className="pb-16 pt-8"
            />
            <p className="text-center text-xl font-bold text-[#FFECE0]">
              自計算機百年前誕生開始，能做的事情就不斷地突破人類的想像 —— 無限。
            </p>
            <br />
            <p className="pb-[100px] text-center text-xl font-bold text-[#FFECE0]">
              但無論計算機如何發展，仍終究源自於具肉體極限的人類 —— 有限。
            </p>

            <img
              src="/2024/website/human hand.png"
              width={169.58}
              height={270.57}
              alt=""
              className="absolute right-[-90px] top-[220px] -z-10 rotate-[37.046deg] select-none md:top-[100px]  md:scale-[2]"
            />

            <Readmore
              content={[
                "自百年前計算機發明開始，人類接連創造出了好多事物：手機、網路、多媒體、機器人、電視⋯⋯一直到近年生成式 AI 應用、自駕車、物聯網、Web 3 逐漸發展，甚至將來可能實現的通用人工智慧。在對這些科技感到興奮的同時，我們也開始擔心這些科技以不同形式超越我們，埋下了人類被科技顛覆的隱憂。",
                "不僅如此，2024 年的社會仍然有各式問題需要解決：社群媒體審查機制、內容推薦演算法、科技綁架、個人資料追蹤、深度偽造技術、詐騙及假新聞、科技巨擘壟斷行為、⋯⋯。每個議題的複雜程度之高、涉及層面之廣，不禁讓我們思考：究竟科技發展會帶領我們到何方？",
                "面對這些挑戰，令人感到不安的同時，未知也充滿了無限的可能性。做為學生，即便經驗尚淺，也許技術尚未成熟，但我們也能盡一己之力。",
                "我們可以從觀察開始，吸收知識、提出問題，並透過多方思考和深入研究來探索解決問題的靈感。與此同時，我們也可以成為實踐者，與同學討論、創造解決方案，並將這些成果分享出去，讓更多人能關注重要議題，打造更緊密的社群。身為算盤的後裔，我們總是能一再地克服重重困難，利用手邊工具創造出全新的應用模式，就像是身在迷宮中的貓，始終能以無法預料的路徑跳脫框架。",
                "身為學生的我們將持續學習、滾動歷史的巨輪，不斷地透過計算機發明各種工具，解決各式各樣的問題；我們將擁抱我們的好奇心，盡己所能和大家討論研究，並將成果取之開源、用之開源；我們將站在巨人的肩膀上，繼承知識及智慧，做到更多前人做不到的事情。",
                "雖然我們的軀體受到壽命的限制，卻因為好奇心和熱情驅使我們不斷學習、探索、傳承知識。作為學生，我們將在人類歷史的長河中繼續創造奇蹟，貢獻自己的力量，生而為人感到驕傲。",
              ]}
              footer="因為 我們終究是人類。"
            />
          </div>
        </div>
      </div>
      <div className="relative pb-8 md:px-[160px]">
        {/* about */}
        <div className="relative">
          <Heading chinese="關於 SITCON" english="About SITCON" />
          <img
            src="/2024/website/cursor.png"
            width={224}
            height={362}
            alt=""
            className="absolute right-24 top-32 w-[30px] rotate-[-32.731deg] opacity-20 md:right-[40rem] md:top-48"
          />
          <p className="text-[18px]">
            {" "}
            學生計算機年會（Students’ Information Technology Conference）自 2013
            年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
          </p>
        </div>

        {/* CoC */}
        <div className="relative">
          <Heading chinese="行為準則" english="Code of Conduct" />
          <img
            src="/2024/website/circle.svg"
            width={370}
            height={370}
            alt=""
            className="absolute -right-48 top-32 animate-spin-slow opacity-5 md:top-0"
          />
          <p className="text-[18px]">
            SITCON
            歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加
            SITCON，我們要求所有參與者閱讀年會的
            <a
              href="https://sitcon.org/code-of-conduct/"
              className="underline underline-offset-2"
              target="_blank"
            >
              行為準則（Code of Conduct）
            </a>
            ，共同創造一個友善的環境。
          </p>
        </div>
        {/* community */}
        <div className="relative">
          <Heading chinese="參與討論" english="Join the community" />
          <p className="text-[18px]">
            SITCON
            是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
            SITCON
            的郵件論壇並貢獻你的想法，如果想成為明年年會的籌備團隊，也可以填寫跳坑表單，我們會在明年年會開始籌備時通知你！
          </p>
          <p className="text-[18px]">
            若你想進一步了解 SITCON 年會籌備與討論的內容，歡迎到 GitLab 上查看
            SITCON 2024 的籌備歷程。
          </p>
        </div>
        {/* three buttons */}
        <div className="relative flex w-full justify-end">
          <img
            src="/2024/website/machine hand.png"
            width={193.51}
            height={308.35}
            alt=""
            className="pointer-events-none absolute -left-[97px] -top-[6.5rem] rotate-[31.79deg] select-none lg:left-[40px] lg:top-[-4.5rem] lg:scale-[2]"
          />
          <div className="mt-4 flex min-h-[160px] flex-wrap justify-center gap-8">
            <Button
              color="blue"
              url="https://docs.google.com/forms/d/e/1FAIpQLSfZHHumwRKY9UzBpMUD7MWzimnOLvm-cPu4noIzyoWPHbaaHA/viewform"
            >
              預約跳坑表單
            </Button>
            <div className="z-10 flex justify-center gap-8">
              <Button
                color="blue"
                url="https://groups.google.com/g/sitcon-general"
              >
                郵件論壇
              </Button>
              <Button
                color="blue"
                url="https://gitlab.com/sitcon-tw/2024/board"
              >
                籌備紀錄
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* LOGOs */}
    </div>
  );
}
