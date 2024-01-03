"use client";
import Button from "@/components/website/button";
import { FeatureCard } from "@/components/cfp/Sponsorship";
import Counter from "@/components/cfp/Counter";
import TableOfContent from "@/components/TableOfContent";
import sponsorData from "./sponsorData";
import { twMerge } from "tailwind-merge";
import Dialog from "@/components/website/Dialog";
import { useState } from "react";
function Sponsors({
  sponsors,
  largeSponsor = false,
}: {
  sponsors: typeof sponsorData.specialThanks;
  largeSponsor?: boolean;
}) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-2 gap-4",
        largeSponsor
          ? "md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
          : "md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]",
      )}
    >
      {sponsors.map((sponsor, i) => (
        <Sponsor sponsor={sponsor} key={i} />
      ))}
    </div>
  );
}
function Sponsor({
  sponsor,
}: {
  sponsor: (typeof sponsorData.specialThanks)[0];
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <img
        src={`/2024/sponsor/${sponsor.image}`}
        className="mx-auto w-full cursor-pointer rounded"
        alt={sponsor.title}
        onClick={() => setIsDialogOpen(true)}
      />
      <Dialog open={isDialogOpen} setOpen={setIsDialogOpen}>
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between text-2xl font-bold md:text-3xl">
            {sponsor.title}
          </div>
          <img
            src={`/2024/sponsor/${sponsor.image}`}
            className="mx-auto w-full max-w-[240px] rounded"
            alt={sponsor.title}
          />
          <div>{sponsor.description}</div>
          <div className="flex items-center justify-center gap-6">
            <Button
              color="blue"
              url={sponsor.url}
              className="text-base md:text-xl"
            >
              前往網站
            </Button>
          </div>
        </div>
        <div
          className="h-4 w-full rounded-b-[10px]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(56, 90, 172, 0.80) 0%, rgba(148, 110, 52, 0.75) 58.96%, #462002 100%)`,
          }}
        ></div>
      </Dialog>
    </>
  );
}

export default function Page() {
  return (
    <TableOfContent>
      <h1 className="mb-4 text-2xl font-bold md:text-4xl" id="page-title">
        支持我們
      </h1>
      <p>
        十年以來，SITCON
        一直秉持著不向與會者收費的原則來舉辦資訊研討會，不僅創造許多學生們交流、教學互長的機會，也帶領無數學子踏入資訊的殿堂。
      </p>
      <div className="my-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
        <FeatureCard bg="1">
          <span>累積逾</span>
          <div>
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={11000} />
            </span>
            名
          </div>
          <span>與會者</span>
        </FeatureCard>
        <FeatureCard bg="2">
          <div>
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={400} />
            </span>
            名
          </div>
          <span>學生講者</span>
        </FeatureCard>
        <FeatureCard bg="3">
          <span>舉辦逾</span>
          <div className="flex gap-6">
            <div>
              <div>
                <span className="mr-1 text-2xl lg:text-4xl">
                  <Counter value={400} />
                </span>
                場
              </div>
              <span>聚會與講座</span>
            </div>
            <div>
              <div>
                <span className="mr-1 text-2xl lg:text-4xl">
                  <Counter value={8} />
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
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={1100} />
            </span>
            名
          </div>
          <span>熱愛資訊的志工</span>
        </FeatureCard>
      </div>
      <p>
        此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以接觸學生資訊人才提升品牌影響力深入學生群體推廣產品內容如果您也認同
        SITCON 的理念，歡迎以行動支持 SITCON 的運作，點擊下方「
        <a
          href="https://sitcon.org/donate"
          target="_blank"
          className="underline underline-offset-2"
        >
          個人贊助
        </a>
        」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
        若您有興趣成為我們的贊助夥伴，歡迎點擊下方「
        <a
          href="https://i.sitcon.org/2024cfs"
          target="_blank"
          className="underline underline-offset-2"
        >
          索取贊助徵求書
        </a>
        」，了解詳細合作方案，或是利用{" "}
        <a
          href="mailto:contact@sitcon.org"
          className="underline underline-offset-2"
        >
          contact@sitcon.org
        </a>{" "}
        聯絡我們，商討更多的合作方式！
      </p>
      <div className="mt-6 flex items-center justify-center gap-6">
        <Button color="blue" url="https://sitcon.org/donate">
          個人贊助
        </Button>
        <Button color="blue" url="https://i.sitcon.org/2024cfs">
          索取贊助徵求書
        </Button>
      </div>
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="主辦單位">
        主辦單位
      </h1>
      <div className="text-center text-xl font-bold md:text-2xl">
        SITCON 學生計算機年會籌備團隊
      </div>
      <img
        src="/2024/website/SITCON_green.svg"
        className="mx-auto mb-8 mt-6 w-full max-w-[300px]"
      />
      <p className="my-2">
        SITCON 學生計算機年會 (Students’ Information Technology Conference)
        是一個由各校同學於網路串聯發起，鼓勵自發學習、切磋成長的學生社群。
      </p>
      <p className="my-2">
        因為熱愛資訊領域、知道尋找興趣相近夥伴的不容易，籌備團隊從 2013
        年以來，便致力於連結對資訊科技相關領域有興趣的學生們，透過每年三月的研討會分享彼此所學，在每週的定期聚交流精進。發展至今，SITCON
        除了是東亞最大的學生資訊社群與研討會，各地參與者也藉由夏令營、一小時學程式
        (Hour of
        Code)、黑客松等不同的面向活動，推廣創新、實作、教學相長、以及開源貢獻的精神與理念；在台灣與海外各地，都有
        SITCON 參與者的身影。
      </p>
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="共同主辦">
        共同主辦
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <div className="mb-2 text-center text-xl font-bold md:text-2xl">
            中央研究院資訊科學研究所
          </div>
          <a href="https://www.iis.sinica.edu.tw/" target="_blank">
            <img
              src="/2024/sponsor/iis.png"
              className="mx-auto mb-4 w-full max-w-[300px]"
            />
          </a>
          <p className="my-2">
            中央研究院資訊科學研究所於 1977 年開始設立籌備處，歷經五年籌備， 於
            1982 年 9
            月正式成立研究所，是中央研究院數理組十一個單位之一。目前編制內有 39
            位研究人員，另外有 29 位博士後研究學者，將近 300
            位專任之資訊技術人員與非全時之研究助理，支援資訊領域之研究與系統之開發。「件件工作，反映自我，凡經我手，必為佳作」是全體同仁一致秉持的工作信念，重視工作之卓越品質，發揮最佳綜效之團隊精神。
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <div className="mb-2 text-center text-xl font-bold md:text-2xl">
            財團法人開放文化基金會
          </div>
          <a href="https://ocf.tw/" target="_blank">
            <img
              src="/2024/sponsor/ocf.png"
              className="mx-auto mb-4 w-full max-w-[300px]"
            />
          </a>
          <p className="my-2">
            開放文化基金會成立於 2014
            年，由多個開源社群及活動組織共同發起，希望協助台灣蓬勃的開放社群，進一步促進開放源碼、開放資料、開放硬體等自由精神，能更廣泛的於各領域中應用，同時也協助政府、企業及非政府組織更能了解開源軟體的優勢、開放資料的重要，進而推廣開放協作的文化。
            2015
            年起我們除了支援本地社群主辦多場中大型活動，也和英國代表處、美國在台協會及世界銀行等單位共同舉辦各種主題講座，深耕台灣的開放文化並與國際交流。
          </p>
        </div>
      </div>
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="協辦單位">
        協辦單位
      </h1>
      <div className="mb-2 text-center text-xl font-bold md:text-2xl">
        智慧創新跨域人才培育計畫
      </div>
      <a href="https://www.itsa.org.tw/" target="_blank">
        <img
          src="/2024/sponsor/itsa.png"
          className="mx-auto mb-4 w-full max-w-[300px]"
        />
      </a>
      <p className="my-2">
        ITSA
        為教育部智慧創新跨域人才培育計畫，協助進行數位人才之培育，聚焦於「智慧感知與互動體驗」、「大數據分析與資料科學」、「文化創意與多媒體」、「電商金融科技」四大類新興數位軟體之人才培育，以及以開源模式培養雲端運算系統軟體、嵌入式系統軟體及軟體工程人才，以補足我國各產業在相關數位應用人才需求之缺口，擴大國內各產業晉用數位軟體人才的來源。
      </p>
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="贊助夥伴">
        贊助夥伴
      </h1>
      {sponsorData.sponsors.map((sponsorType) => (
        <div key={sponsorType.title}>
          <h2
            className="mb-4 mt-8 text-xl font-bold md:text-2xl"
            id={sponsorType.title}
          >
            {sponsorType.title}
          </h2>
          <Sponsors
            sponsors={sponsorType.items}
            largeSponsor={
              sponsorType.title === "領航級" || sponsorType.title === "深耕級"
            }
          />
        </div>
      ))}
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="特別感謝">
        特別感謝
      </h1>
      <Sponsors sponsors={sponsorData.specialThanks} />
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="媒體夥伴">
        媒體夥伴
      </h1>
      <Sponsors sponsors={sponsorData.mediaPartners} />
    </TableOfContent>
  );
}
