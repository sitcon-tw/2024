"use client";
import Button from "@/components/website/button";
import { FeatureCard } from "@/components/cfp/Sponsorship";
import Counter from "@/components/cfp/Counter";
import TableOfContent from "@/components/TableOfContent";
export default function Page() {
  return (
    <TableOfContent>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="page-title">
        支持我們
      </h1>
      <p>
        十年以來，SITCON
        一直秉持著不向與會者收費的原則來舉辦資訊研討會，不僅創造許多學生們交流、教學互長的機會，也帶領無數學子踏入資訊的殿堂。
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <FeatureCard bg="1">
          <span>累積逾</span>
          <div>
            <span className="text-2xl lg:text-4xl mr-1">
              <Counter value={11000} />
            </span>
            名
          </div>
          <span>與會者</span>
        </FeatureCard>
        <FeatureCard bg="2">
          <div>
            <span className="text-2xl lg:text-4xl mr-1">
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
                <span className="text-2xl lg:text-4xl mr-1">
                  <Counter value={400} />
                </span>
                場
              </div>
              <span>聚會與講座</span>
            </div>
            <div>
              <div>
                <span className="text-2xl lg:text-4xl mr-1">
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
            <span className="text-2xl lg:text-4xl mr-1">
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
      <div className="flex justify-center items-center gap-6 mt-6">
        <Button color="blue" url="https://sitcon.org/donate">
          個人贊助
        </Button>
        <Button color="blue" url="https://i.sitcon.org/2024cfs">
          索取贊助徵求書
        </Button>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="主辦單位">
        主辦單位
      </h1>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="共同主辦">
        共同主辦
      </h1>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="協辦單位">
        協辦單位
      </h1>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="贊助夥伴">
        贊助夥伴
      </h1>
    </TableOfContent>
  );
}
