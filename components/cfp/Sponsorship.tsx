"use client";
import Button from "@/components/Button";
import Counter from "@/components/cfp/Counter";
import { motion } from "framer-motion";

function FeatureCards({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mb-16">
      {children}
    </div>
  );
}
function FeatureCard({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <motion.div className="bg-black p-4 rounded-lg overflow-hidden relative flex flex-col pt-32 hover:pt-16 hover:pb-16 hover:shadow-xl group transition-all hover:scale-105 duration-300 ease-in-out">
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 group-hover:opacity-50 transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url('/statscard/${bg}.jpg')`,
          mask: "linear-gradient(180deg, #000 60%, #0000 100%)",
          WebkitMask: "linear-gradient(180deg, #000 60%, #0000 100%)",
        }}
      />
      <div
        className="relative text-xs sm:text-sm md:text-base flex flex-col items-center text-white group-hover:scale-125 transition-all h-full justify-end group-hover:justify-center duration-300 ease-in-out"
        style={{
          textShadow: "0 0 8px rgba(0,0,0,0.5)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function Sponsorship() {
  return (
    <div className="max-w-[700px] container mx-auto">
      <h1 className="text-center text-5xl font-bold mb-6">SITCON 贊助徵求</h1>
      <p className="mb-12">
        SITCON
        秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
      </p>
      <div className="text-center text-2xl font-bold gap-2 leading-relaxed mb-9">
        自 2012 發源以來， <br />
        我們帶領了無數學子進入資訊的殿堂，更做到： <br />
      </div>
      <FeatureCards>
        <FeatureCard bg="1">
          <span>超過</span>
          <div>
            <span className="text-2xl lg:text-4xl mr-1">
              <Counter value={10000} />
            </span>
            名
          </div>
          <span>與會者</span>
        </FeatureCard>
        <FeatureCard bg="2">
          <div>
            <span className="text-2xl lg:text-4xl mr-1">
              <Counter value={350} />
            </span>
            名
          </div>
          <span>學生講者</span>
        </FeatureCard>
        <FeatureCard bg="3">
          <div className="flex gap-6">
            <div>
              <div>
                <span className="text-2xl lg:text-4xl mr-1">
                  <Counter value={350} />
                </span>
                場
              </div>
              <span>聚會與講座</span>
            </div>
            <div>
              <div>
                <span className="text-2xl lg:text-4xl mr-1">
                  <Counter value={7} />
                </span>
                場
              </div>
              <span>夏令營</span>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard bg="4">
          <span>扶植近</span>
          <div>
            <span className="text-2xl lg:text-4xl mr-1">
              <Counter value={350} />
            </span>
            名
          </div>
          <span>資訊推廣志工</span>
        </FeatureCard>
      </FeatureCards>
      <div className="text-center text-2xl font-bold gap-2 leading-relaxed mb-16">
        此外，我們也樂見企業與學生的近距離交流， <br />
        成為我們的合作夥伴您可以： <br />
      </div>

      <FeatureCards>
        <FeatureCard bg="5">接觸學生資訊人才</FeatureCard>
        <FeatureCard bg="6">提升品牌影響力</FeatureCard>
        <FeatureCard bg="7">深入學生群體</FeatureCard>
        <FeatureCard bg="8">推廣產品內容</FeatureCard>
      </FeatureCards>
      <p>
        如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON
        的運作，點擊下方「我要贊助」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
      </p>
      <br />
      <p>
        若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用
        contact@sitcon.org 聯絡我們，商討更多的合作方式！
      </p>
      <div className="flex justify-center gap-4 mt-8 mb-16">
        <Button href="/sponsorship">我要贊助</Button>
        <Button href="/sponsorship">索取贊助徵求書</Button>
      </div>
    </div>
  );
}
