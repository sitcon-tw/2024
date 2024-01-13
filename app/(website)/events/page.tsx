"use client";
import EventSection from "@/components/website/eventSection";
import TableOfContent from "@/components/TableOfContent";
export default function Page() {
  return (
    <TableOfContent>
      <div className="mb-14 text-2xl font-bold md:text-4xl" id="page-title">
        年會活動
      </div>
      <div className="mb-16 text-4xl font-bold">
        你是第一次參加 SITCON 年會嗎？
      </div>
      <EventSection
        title="導遊團"
        backgroundImage="guide.svg"
        backgroundPosition="left"
        content={[
          "在這個人潮洶湧的 SITCON 年會中，是否感到有些迷茫呢？您是否還在猶豫該往哪個方向前進呢？別擔心，跟著 SITCON 導遊的腳步，帶領你前往社群攤位、走訪海報展演、咖啡廳，讓您更瞭解 SITCON 的各個面向以及運作模式，趕快來參加導遊團，與新朋友一同揭開年會的精彩面紗！",
        ]}
      />
      <EventSection
        title="天使計畫"
        backgroundImage="angel.svg"
        backgroundPosition="right"
        content={[
          "無論您是初次踏足 SITCON，還是已是老朋友，我們誠摯邀請您參與天使計劃！",
          "天使計劃提供會眾們交流機會的舞台，可以彼此分享和學習。無論您是有豐富經驗的老手，還是對科技充滿好奇心的新手，都能在這裡找到共鳴。我們會根據雙方提供的資料進行配對，讓有經驗的天使帶領初心者，協助初心者瞭解年會。根據天使的意願，可以選擇一對一交流，或者成為多位初心者的指引者，讓他們在這場年會中互相啟發。",
          "天使計劃不僅是指引之旅，更是共同成長的機會。無論您是天使還是初心者，每個人都能在這裡找到屬於自己的位置，齊心創造一個開放、互相學習的環境。",
        ]}
      />
      <div className="mb-16 text-4xl font-bold">
        有話想跟大家說，想要分享你的想法嗎？
      </div>
      <EventSection
        title="白板大戰"
        backgroundImage="whiteboard.svg"
        backgroundPosition="left"
        content={[
          "【歡迎進行和諧的鬥爭！】各種教派百家爭鳴的今天，是時候一決高下了。誠摯邀請您至三樓留言區，以筆墨加入這場沒有硝煙的戰爭。我們以「白板大戰」做為號召，圍繞多個主題展開討論。希望大家藉由閱讀和書寫，以輕鬆歡快的氣氛進行傾聽和對話。歡迎在白板上各抒己見，向敵方發出友善的攻擊",
        ]}
      />
      <EventSection
        title="Lightning Talk 閃電秀"
        backgroundImage="lightning.svg"
        backgroundPosition="right"
        content={[
          "你知道 Lightning Talk 為什麼有 Lightning 這個詞嗎？因為這是像閃電一樣短的演講！",
          "從上台到下台，包含準備電腦以及連結投影機，每位講者只有 3 分鐘的時間，一旦超過的話⋯⋯會被直接切斷訊號，聽起來是不是非常刺激有趣呢～",
          "躍躍欲試了嗎？Lightning Talk 閃電秀將於年會當天早上開放報名，並於所有議程結束後、閉幕前進行演講，一起來期待這次會出現怎麼樣令人興奮、期待又新奇的內容吧！",
        ]}
      />
      <EventSection
        title="Poster"
        backgroundImage="poster.svg"
        backgroundPosition="left"
        content={[
          "這是 SITCON 2024 的新嘗試！我們提供學生們一個展現自我的舞台，讓大家可以透過 Poster 發表自己做的研究，同時也能和志同道合的同學當面交流想法，碰撞出知識的火花！歡迎投稿 Poster，一起加入這場學術派對！",
        ]}
      />
      <EventSection
        title="咖啡廳"
        backgroundImage="chat.svg"
        backgroundPosition="right"
        content={[
          "想與來自四面八方的會眾進行交流嗎？還是想繼續討論剛剛精彩的議程嗎？抑或是想要有個地方好好休息呢？那麼歡迎來到 SITCON 咖啡廳。在這裡，我們提供悠閒的環境、舒適的空間，以及美味的小點，讓各個需求的會眾都能在這裡找到屬於自己的小天地，無論你是想與人聊天、討論，或是在一整天豐富的行程中想稍微喘口氣，甚至是在這裡腦力激盪出一項專案，我們都歡迎！",
        ]}
      />
      <EventSection
        title="開放式議程"
        backgroundImage="chat.svg"
        backgroundPosition="left"
        content={[
          "在追求創新的時代，我們為講者提供了開放式議程這個選項，跳脫講者對聽眾單向陳述式的演講，開放式議程更加強調主講者和與會者的雙向交流。SITCON 作為學生展現自己的舞台，我們期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是一同探討學生相關議題等。",
        ]}
      />
      <div className="mb-16 text-4xl font-bold">議程之間不知道要幹嘛嗎？</div>
      <EventSection
        title="大地遊戲"
        backgroundImage="ground.svg"
        backgroundPosition="right"
        content={[
          "第一次參加 SITCON，還沒進入狀況嗎？今年有各式各樣的活動，精彩議程、海報展、咖啡廳和攤位等等，還摸不著頭緒要先去哪裡逛逛嗎？還在猶豫怎麼規劃最充實的時間利用嗎？別擔心！跟著感覺走，讓我們來指引你方向！今年的大地遊戲，我們依照不同主題設計了幾條有趣好玩的路線，邀請您來一同參與。只要找到自己有興趣的路線，並完成路線上各關卡指定任務，就可以獲得認證，來指定地點兌換 SITCON 紀念禮品點數折抵哦～！",
        ]}
      />
    </TableOfContent>
  );
}
