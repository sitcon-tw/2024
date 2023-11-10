import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
function AboutButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-[#E5C366] hover:opacity-90 active:opacity-80 rounded-full p-2 min-w-[150px] text-center"
    >
      {children}
    </a>
  );
}
function MobileRock() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [175, -175]);
  return (
    <div
      className="w-full flex items-center justify-center overflow-hidden h-[300px] my-4 lg:hidden"
      ref={ref}
    >
      <motion.img
        src="/2024/cfp/hero_bg.webp"
        className="w-full"
        style={{
          y: imgY,
          scale: 1.2,
        }}
      />
    </div>
  );
}
function Rock() {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-100, 500]);
  const opacity = useTransform(
    scrollY,
    [0, 300, 900, 1200, 1500],
    [0.25, 1, 1, 0.25, 0]
  );
  const blur = useTransform(
    scrollY,
    [0, 300, 900, 1200, 1500],
    [10, 0, 0, 10, 10]
  );
  const filter = useMotionTemplate`blur(${blur}px)`;
  return (
    <motion.img
      src="/2024/cfp/hero_bg.webp"
      className="mx-auto hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-[45vw] xl:w-[50vw] -z-10"
      style={{
        y: imgY,
        opacity,
        filter,
      }}
    />
  );
}
export default function About() {
  return (
    <>
      <div className="relative my-10">
        <div className="container relative py-10">
          <div className="w-full lg:w-[500px]">
            <h1 className="text-4xl font-bold mb-4">關於 SITCON</h1>
            <div>
              學生計算機年會（Students’ Information Technology Conference）自
              2013
              年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
            </div>
            <h1 className="text-4xl font-bold mb-4 mt-16">參與討論</h1>
            <div>
              SITCON
              是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
              SITCON 的郵件論壇並貢獻你的想法！
              若你想進一步了解過往討論的內容，也歡迎到 GitLab 上查看 SITCON 2024
              的籌備歷程。
            </div>
            <div className="flex gap-4 mt-8 items-center justify-center lg:justify-end">
              <AboutButton href="https://groups.google.com/g/sitcon-general/">
                訂閱郵件論壇
              </AboutButton>
              <AboutButton href="https://gitlab.com/sitcon-tw/2024/board">
                查看 GitLab
              </AboutButton>
            </div>
          </div>
        </div>
        <Rock />
      </div>
      <MobileRock />
    </>
  );
}
