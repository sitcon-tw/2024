import { motion } from "framer-motion";
function TwoLineDivider() {
  return (
    <div className="my-16 flex flex-row	items-center justify-center gap-[10px]">
      <div className="flex flex-col items-center h-[600px]">
        <div className="w-[5px] h-[5px] rounded-full bg-gold"></div>
        <div className="w-[1px] h-[600px] bg-gold"></div>
        <div className="w-[5px] h-[5px] rounded-full bg-gold"></div>
      </div>
      <div className="flex flex-col items-center h-[600px]">
        <div className="w-[5px] h-[5px] rounded-full bg-gold"></div>
        <div className="w-[1px] h-[600px] bg-gold"></div>
        <div className="w-[5px] h-[5px] rounded-full bg-gold"></div>
      </div>
    </div>
  );
}
function LineDivider() {
  return (
    <div className="my-16 flex flex-row	items-center justify-center gap-[10px]">
      <div className="flex flex-col items-center h-[300px]">
        <div className="w-[5px] h-[5px] rounded-full bg-gold"></div>
        <div className="w-[1px] h-[300px] bg-gold"></div>
        <div className="w-[5px] h-[5px] rounded-full bg-gold"></div>
      </div>
    </div>
  );
}

export default function Theme() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="lg:w-1/2 leading-[2em]">
            <TwoLineDivider />
            <motion.div
              className="text-center text-2xl mb-16 leading-[2em]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 1 }}
            >
              從計算機自百年前誕生後，
              <br />
              它能做的事情不斷的突破人類的想像
              <br />
              &#x2015;&#x2015;{" "}
              <motion.span
                initial={{ filter: "blur(10px)", scale: 2 }}
                whileInView={{ filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.75 }}
                className="text-gold font-bold"
              >
                無限
              </motion.span>
              。
            </motion.div>
            <motion.div
              className="text-center text-2xl mb-16 leading-[2em]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 1 }}
            >
              但無論計算機如何發展，
              <br />
              仍終究源自於具肉體極限的人類
              <br />
              &#x2015;&#x2015;{" "}
              <motion.span
                initial={{ filter: "blur(10px)", scale: 2 }}
                whileInView={{ filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.75 }}
                className="text-gold font-bold"
              >
                有限
              </motion.span>
              。
            </motion.div>
            <LineDivider />
            <div className="py-10">
              <h2 className="text-2xl mb-4 text-center">
                SITCON 2024 年會主題
              </h2>
              <h1 className="text-5xl font-bold mb-16 text-center">
                Human After All
              </h1>
              <p className="mb-4">
                自百年前計算機發明開始，人類不斷創造出了好多事物：手機、網路、多媒體、機器人、電視等等，一直到近年的各種生成式
                AI 應用、無人車、Web 3.0
                逐漸發展，甚至將來可能實現的通用人工智慧出現在生活中。在對這些科技興奮的同時，我們常常害怕這些科技以不同形式取代我們，吞噬掉我們的身為人類的尊嚴。
              </p>
              <p className="mb-4">
                身困迷宮中的貓不知道外面世界的存在，就如同身困無知的人類無法想像構築烏托邦的道路。雖然現實中還無法請人工智慧生成出前往理想國的康莊大道，但卻能盡我們所能的脫離無知，為了避免因其帶來的慌張及恐懼。
              </p>
              <p className="mb-4">
                不僅如此，2024
                年的社會也不斷有各式問題需要解決：社群媒體審查機制、內容推薦演算法、科技綁架、個人資料追蹤、深度偽造技術、詐騙及假新聞、科技巨擎壟斷行為、開源文化打壓、各式資安議題等等。現今計算機、網路也為人類社會帶來了許多問題，每個議題的複雜程度之高難以讓學生們面對和解決。
              </p>
            </div>
            <LineDivider />
            <div className="text-center text-xl lg:text-2xl font-bold mb-16">
              <div className="leading-[2em]">
                但不要忘記，這些問題都皆出自於我們人類
                <span className="absolute">。</span> <br />
                而身為學生，我們一定有參與行動的方式
                <span className="absolute">。</span> <br />
              </div>
            </div>
            <LineDivider />
            <div className="my-16 flex flex-col gap-4">
              <p>
                我們可以先從觀察問題開始，了解相關知識，並思考、研究、實作，找出解決問題的靈感；我們可以和身邊的同學討論，利用群眾智慧共同創造有意義的解決方案；我們可以成為實踐者，貢獻程式碼、打造並部署服務、透過實際行動推動專案；我們可以將這些結晶透過任何形式——甚至變成議程——分享給想認識相關議題的同學，讓更多人能關注你認為重要的議題，打造更緊密的社群。
              </p>
              <p>
                而身為學生的我們將持續學習、滾動歷史的巨輪，不斷地過計算機發明各種工具，解決各式各樣的問題；我們將擁抱我們的好奇心，盡己所能和大家討論研究，並將成果取之開源、用之開源；我們將站在巨人的肩膀上，繼承知識及智慧，做到更多前人做不到的事情。
              </p>
              <p>
                日新月異的科技讓人類感覺似乎不再是人，也讓身為學生的我們對於學習逐漸失去意義。即便如此，人類最終是受好奇心驅使的動物，即便最後計算機發展到與人類無異，好奇心與熱情永遠將是與廣義上計算機最大的差異。
              </p>
            </div>
            <LineDivider />
            <motion.div
              className="text-center text-3xl lg:text-4xl font-bold my-16"
              initial={{ opacity: 0, letterSpacing: "0" }}
              whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              因為，我們終究是人類
              <span className="absolute">。</span>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
