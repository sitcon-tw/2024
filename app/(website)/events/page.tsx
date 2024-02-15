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
          "在這個人潮洶湧的 SITCON 年會中，是否感到有些迷茫呢？您是否還在猶豫該往哪個方向前進呢？別擔心，跟著 SITCON 導遊的腳步，帶領你前往社群攤位、走訪靜態海報展、咖啡廳，讓您更瞭解 SITCON 的各個面向以及運作模式，趕快來參加導遊團，與新朋友一同揭開年會的精彩面紗！",
        ]}
      />
      <EventSection
        title="天使計畫"
        backgroundImage="angel.svg"
        backgroundPosition="right"
        content={[
          "無論你是初次踏足 SITCON，還是熟悉的老朋友，都誠摯地邀請你參與天使計畫！",
          "天使計畫提供一個交流的平台，讓大家彼此分享和探索。不論你是擁有豐富經驗的老手，還是對科技充滿好奇心的新手，都能在這裡找到共鳴。我們會根據雙方提供的資料進行配對，你可以選擇一對一交流，亦可與多位會眾一齊參與。鼓勵初心者主動與天使交流，並藉此機會，讓天使和初心者，甚至初心者之間相互啟發，更深入了解這場年會。",
          "天使計畫不僅是指引之旅，更是共同成長的機會。無論你是天使還是初心者，每個人都能在這裡找到屬於自己的位置，攜手創造一個開放、互相學習的環境。",
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
          "【歡迎進行和諧的鬥爭！】各種教派百家爭鳴的今天，是時候一決高下了。",
          "誠摯邀請您至三樓留言區，以筆墨加入這場沒有硝煙的戰爭。",
          "我們以「白板大戰」做為號召，圍繞多個主題展開討論。希望大家藉由閱讀和書寫，以輕鬆歡快的氣氛進行傾聽和對話。",
          "歡迎在白板上各抒己見，向敵方發出友善的攻擊。",
        ]}
      />
      <EventSection
        title="Lightning Talk 閃電秀"
        backgroundImage="lightning.svg"
        backgroundPosition="right"
        content={[
          "你知道 Lightning Talk 為什麼有 Lightning 這個詞嗎？因為這是像閃電一樣短的演講！",
          "在今年，我們希望講者可以讓聽眾更瞭解講述的內容，於是我們將原先的三分鐘延長到了五分鐘！但不變的是，一旦超時的話……會被直接切斷訊號，聽起來是不是非常刺激有趣呢？",
          "躍躍欲試了嗎？Lightning Talk 閃電秀將於年會當天早上開放報名，並於所有議程結束後、閉幕前進行演講，一起來期待這次會出現怎麼樣令人興奮、期待又新奇的內容吧！",
        ]}
      />
      <EventSection
        title="靜態海報展"
        backgroundImage="poster.svg"
        backgroundPosition="left"
        content={[
          "這是 SITCON 2024 的新嘗試！我們提供學生們一個展現自我的舞台，讓大家可以透過靜態海報展發表自己做的研究，同時也能和志同道合的同學當面交流想法，碰撞出知識的火花！歡迎投稿靜態海報展，一起加入這場學術派對！",
        ]}
      />
      <EventSection
        title="咖啡廳"
        backgroundImage="coffee.svg"
        backgroundPosition="right"
        content={[
          "想與來自四面八方的會眾進行交流嗎？還是想繼續討論剛剛精彩的議程嗎？抑或是想要有個地方好好休息呢？那麼歡迎來到 SITCON 咖啡廳。在這裡，我們提供悠閒的環境、舒適的空間，以及不可或缺的——咖啡，讓各個需求的會眾都能在這裡找到屬於自己的小天地，無論你是想與人聊天、討論，或是在一整天豐富的行程中想稍微喘口氣，甚至是在這裡腦力激盪出一項專案，我們都歡迎！",
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
          "第一次參加 SITCON，還沒進入狀況嗎？今年有各式各樣的活動，除了精彩議程，還有靜態海報展、咖啡廳和攤位等等，還摸不著頭緒要先去哪裡逛逛嗎？還在猶豫該怎麼規劃最充實的時間利用嗎？別擔心！快點進 OPass「迷因拼圖」開始遊戲就對啦！",
          "今年的大地遊戲，我們將 SITCON 2024 諸多年會相關活動都融合進了「迷因拼圖」遊戲中！邀請您來一同參與，邊玩邊破解今年所有有趣活動。除此之外，達成指定任務條件後，還可以至三樓講者服務台兌換 SITCON 2024 紀念禮品抽獎券哦～",
          "完成越多任務、中獎機率越高！快點開始遊戲吧 (ﾉ>ω<)ﾉ",
          // "【點此進入遊戲介面】"
        ]}
      />
    </TableOfContent>
  );
}
