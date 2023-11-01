"use client"
import Button from '@/components/Button';
import Title from '@/components/Title'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React, { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [counts, setCounts] = useState({
    audience: 0,
    speaker: 0,
    lecture: 0,
    camp: 0,
    volunteer: 0,
  });

  const statsContentText = (index: number) => {
    switch (index) {
      case 1: return '超過';
      case 2: return '';
      case 3: return '';
      case 4: return '扶植近';
      case 5: return '接觸學生資訊人才';
      case 6: return '提升品牌影響力';
      case 7: return '深入學生群體';
      case 8: return '推廣產品內容';
      default: return '';
    }
  }

  const statsContentCount = (index: number) => {
    switch (index) {
      case 1: return counts.audience.toLocaleString();
      case 2: return counts.speaker.toLocaleString();
      case 3: return counts.lecture.toLocaleString();
      case 4: return counts.volunteer.toLocaleString();
      default: return '';
    }
  }

  const statsContentUnit = (index: number) => {
    switch (index) {
      case 1: return '名 與會者';
      case 2: return '名 學生講者';
      case 3: return '場 聚會與講座';
      case 4: return '名 資訊推廣志工';
      default: return '';
    }
  }

  useEffect(() => {
    const rawCounts = {
      audience: 10000,
      speaker: 350,
      lecture: 400,
      camp: 7,
      volunteer: 1000
    };

    const intervals = {};

    for (const key in rawCounts) {
      intervals[key] = setInterval(() => {
        setCounts(prev => {
          if (prev[key] < rawCounts[key]) {
            return {
              ...prev,
              [key]: prev[key] + Math.floor(rawCounts[key] / 100)
            };
          } else {
            clearInterval(intervals[key]);
            return {
              ...prev,
              [key]: rawCounts[key]
            };
          }
        });
      }, 10);
    }

    return () => {
      for (const key in intervals) {
        clearInterval(intervals[key]);
      }
    };

  }, []);

  const styles = {
    linesContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    },
    singleLineContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '300px',
    },
    lineDot: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: 'gold'
    },
    line: {
        width: '1px',
        height: '300px',
        backgroundColor: 'gold'
    },
    longDash: {
        display: 'inline-block',
        height: '1px',
        verticalAlign: 'middle',
        backgroundColor: 'black'
    }
  };

  return (
  <div className="container mx-auto">
    <div className="flex justify-center">
      <div className="w-1/2">
        <h1 className="text-center text-5xl font-bold mb-6">SITCON 贊助徵求</h1>
        <p className="mb-12">
        SITCON 秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
        </p>
        <div className="text-center text-2xl font-bold gap-2 leading-relaxed mb-9">
            自 2012 發源以來， <br />
            我們帶領了無數學子進入資訊的殿堂，更做到： <br />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full aspect-square mb-16">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-black p-4 rounded-lg relative group transform transition-transform duration-400 hover:scale-105 flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('/statscard/${i}.jpg')` }}></div>
              <div className="relative z-10 flex flex-col items-center justify-end space-y-2">
                <span className="text-white text-lg font-light">{statsContentText(i)}</span>
                <span className="text-white text-4xl font-bold">{statsContentCount(i)}</span>
                <span className="text-white text-base font-light ml-2 inline-block">{statsContentUnit(i)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-2xl font-bold gap-2 leading-relaxed mb-16">
            此外，我們也樂見企業與學生的近距離交流， <br />
            成為我們的合作夥伴您可以： <br />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full aspect-square mb-16">
          {[5, 6, 7, 8].map(i => (
            <div key={i} className="bg-black p-4 rounded-lg relative group transform transition-transform duration-400 hover:scale-105 flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('/statscard/${i}.jpg')` }}></div>
              <div className="relative z-10 flex flex-col items-center justify-end space-y-2">
                <span className="text-white text-lg font-light">{statsContentText(i)}</span>
              </div>
            </div>
          ))}
        </div>
        <p>
        如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON 的運作，點擊下方「我要贊助」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
        </p>
        <br /> <p>
        若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用 contact@sitcon.org 聯絡我們，商討更多的合作方式！
        </p>
        <div className="flex justify-center gap-4 mt-8 mb-16">
          <Button href="/sponsorship">我要贊助</Button>
          <Button href="/sponsorship">索取贊助徵求書</Button>
        </div>
        <div className="mb-16" style={styles.linesContainer}>
          <div style={{...styles.singleLineContainer, height: '600px'}}>
              <div style={styles.lineDot}></div>
              <div style={{...styles.line, height:'600px'}}></div>
              <div style={styles.lineDot}></div>
          </div>
          <div style={{...styles.singleLineContainer, height: '600px'}}>
              <div style={styles.lineDot}></div>
              <div style={{...styles.line, height:'600px'}}></div>
              <div style={styles.lineDot}></div>
          </div>
        </div>
        <div className="text-center text-2xl gap-2 leading-relaxed mb-16">
            從計算機自百年前誕生後，<br />
            它能做的事情不斷的突破人類的想像<br />
            &#x2015;&#x2015;<span  style={{color: 'gold'}}>無限</span>。
        </div>
        <div className="text-center text-2xl gap-2 leading-relaxed mb-16">
            但無論計算機如何發展，<br />
            仍終究源自於具肉體極限的人類<br />
            &#x2015;&#x2015;<span  style={{color: 'gold'}}>有限</span>。
        </div>
        <div className="mb-16" style={styles.linesContainer}>
          <div style={styles.singleLineContainer}>
              <div style={styles.lineDot}></div>
              <div style={styles.line}></div>
              <div style={styles.lineDot}></div>
          </div>
        </div>
        <div className="p-10">
          <h2 className="text-2xl mb-6 text-center">SITCON 2024 年會主題</h2>
          <h1 className="text-5xl font-bold mb-16 text-center">Human After All</h1>
          <p className="leading-relaxed mb-4">
          自百年前計算機發明開始，人類不斷創造出了好多事物：手機、網路、多媒體、機器人、電視等等，一直到近年的各種生成式 AI 應用、無人車、Web 3.0 逐漸發展，甚至將來可能實現的通用人工智慧出現在生活中。在對這些科技興奮的同時，我們常常害怕這些科技以不同形式取代我們，吞噬掉我們的身為人類的尊嚴。
          </p>
          <p className="leading-relaxed mb-4">
          身困迷宮中的貓不知道外面世界的存在，就如同身困無知的人類無法想像構築烏托邦的道路。雖然現實中還無法請人工智慧生成出前往理想國的康莊大道，但卻能盡我們所能的脫離無知，為了避免因其帶來的慌張及恐懼。
          </p>
          <p className="leading-relaxed mb-4">
          不僅如此，2024 年的社會也不斷有各式問題需要解決：社群媒體審查機制、內容推薦演算法、科技綁架、個人資料追蹤、深度偽造技術、詐騙及假新聞、科技巨擎壟斷行為、開源文化打壓、各式資安議題等等。現今計算機、網路也為人類社會帶來了許多問題，每個議題的複雜程度之高難以讓學生們面對和解決。
          </p>
        </div>
        <div className="mb-16" style={styles.linesContainer}>
          <div style={styles.singleLineContainer}>
              <div style={styles.lineDot}></div>
              <div style={styles.line}></div>
              <div style={styles.lineDot}></div>
          </div>
        </div>
        <div className="text-center text-2xl font-bold gap-2 leading-relaxed mb-16">
            但不要忘記，這些問題都皆出自於我們人類。 <br />
            而身為學生，我們一定有參與行動的方式。 <br />
        </div>
        <div className="mb-4" style={styles.linesContainer}>
          <div style={styles.singleLineContainer}>
              <div style={styles.lineDot}></div>
              <div style={styles.line}></div>
              <div style={styles.lineDot}></div>
          </div>
        </div>
        <div className="p-10">
          <p className="leading-relaxed mb-4">
          我們可以先從觀察問題開始，了解相關知識，並思考、研究、實作，找出解決問題的靈感；我們可以和身邊的同學討論，利用群眾智慧共同創造有意義的解決方案；我們可以成為實踐者，貢獻程式碼、打造並部署服務、透過實際行動推動專案；我們可以將這些結晶透過任何形式——甚至變成議程——分享給想認識相關議題的同學，讓更多人能關注你認為重要的議題，打造更緊密的社群。
          </p>
          <p className="leading-relaxed mb-4">
          而身為學生的我們將持續學習、滾動歷史的巨輪，不斷地過計算機發明各種工具，解決各式各樣的問題；我們將擁抱我們的好奇心，盡己所能和大家討論研究，並將成果取之開源、用之開源；我們將站在巨人的肩膀上，繼承知識及智慧，做到更多前人做不到的事情。
          </p>
          <p className="leading-relaxed mb-4">
          日新月異的科技讓人類感覺似乎不再是人，也讓身為學生的我們對於學習逐漸失去意義。即便如此，人類最終是受好奇心驅使的動物，即便最後計算機發展到與人類無異，好奇心與熱情永遠將是與廣義上計算機最大的差異。
          </p>
        </div>
        <div className="mb-16" style={styles.linesContainer}>
          <div style={styles.singleLineContainer}>
              <div style={styles.lineDot}></div>
              <div style={styles.line}></div>
              <div style={styles.lineDot}></div>
          </div>
        </div>
        <div className="text-center text-4xl font-bold gap-2 leading-relaxed mb-16">
          因為，我們終究是人類。
        </div>
      </div>
    </div>
  </div>);
}
