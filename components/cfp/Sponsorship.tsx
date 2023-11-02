"use client";
import Button from "@/components/Button";
import Counter from "@/components/cfp/Counter";

export default function Sponsorship() {
  const statsContentText = (index: number) => {
    switch (index) {
      case 1:
        return "超過";
      case 2:
        return "";
      case 3:
        return "";
      case 4:
        return "扶植近";
      case 5:
        return "接觸學生資訊人才";
      case 6:
        return "提升品牌影響力";
      case 7:
        return "深入學生群體";
      case 8:
        return "推廣產品內容";
      default:
        return "";
    }
  };

  const statsContentCount = (index: number) => {
    switch (index) {
      case 1:
        return <Counter value={10000} />;
      case 2:
        return <Counter value={350} />;
      case 3:
        return <Counter value={400} />;
      case 4:
        return <Counter value={1000} />;
      default:
        return "";
    }
  };

  const statsContentUnit = (index: number) => {
    switch (index) {
      case 1:
        return "名與會者";
      case 2:
        return "名學生講者";
      case 3:
        return "場聚會與講座";
      case 4:
        return "名資訊推廣志工";
      default:
        return "";
    }
  };
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
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4 w-full aspect-auto md:aspect-square mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-black p-4 rounded-lg relative group transform transition-transform duration-400 hover:scale-105 flex flex-col justify-end"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('/statscard/${i}.jpg')` }}
            ></div>
            <div className="relative text-xs sm:text-sm md:text-base xl:text-xl flex flex-col items-center justify-end">
              <span className="text-white text-lg font-light">
                {statsContentText(i)}
              </span>
              <span className="text-white text-4xl font-bold">
                {statsContentCount(i)}
              </span>
              <span className="text-white text-base font-light ml-2 inline-block">
                {statsContentUnit(i)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-2xl font-bold gap-2 leading-relaxed mb-16">
        此外，我們也樂見企業與學生的近距離交流， <br />
        成為我們的合作夥伴您可以： <br />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full aspect-square mb-16">
        {[5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="bg-black p-4 rounded-lg relative group transform transition-transform duration-400 hover:scale-105 flex flex-col justify-end"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('/statscard/${i}.jpg')` }}
            />
            <div className="relative z-10 flex flex-col items-center justify-end space-y-2">
              <span className="text-white text-lg font-light">
                {statsContentText(i)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p>
        如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON
        的運作，點擊下方「我要贊助」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
      </p>
      <br />{" "}
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
