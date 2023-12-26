import EventSection from "@/components/website/eventSection";

export default function Page() {
  return <div className="container">
    <h1 className="text-5xl font-bold mb-14">年會活動</h1>
    <h2 className="text-4xl font-bold mb-10">你是第一次參加 SITCON 年會嗎？</h2>
    <EventSection title="導遊團" content="在這個人潮洶湧的 SITCON 年會中，是否感到有些迷茫呢？您是否還在猶豫該往哪個方向前進呢？別擔心，跟著 SITCON 導遊的腳步，帶領你前往社群攤位、走訪海報展演、咖啡廳，讓您更瞭解 SITCON 的各個面向以及運作模式，趕快來參加導遊團，與新朋友一同揭開年會的精彩面紗！"></EventSection>
    <EventSection title="天使計畫" content="無論您是初次踏足 SITCON，還是已是老朋友，我們誠摯邀請您參與天使計劃！
天使計劃提供會眾們交流機會的舞台，可以彼此分享和學習。無論您是有豐富經驗的老手，還是對科技充滿好奇心的新手，都能在這裡找到共鳴。我們會根據雙方提供的資料進行配對，讓有經驗的天使帶領初心者，協助初心者瞭解年會。根據天使的意願，可以選擇一對一交流，或者成為多位初心者的指引者，讓他們在這場年會中互相啟發。
天使計劃不僅是指引之旅，更是共同成長的機會。無論您是天使還是初心者，每個人都能在這裡找到屬於自己的位置，齊心創造一個開放、互相學習的環境。"></EventSection>
  </div>
}
