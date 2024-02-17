import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";
const baseUrl = "";
function TitleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="mb-8">
      <Text className="inline rounded-t bg-[#C1BCB5] px-4 py-2 text-[24px] font-bold text-white">
        {title}
      </Text>
      <Section className="w-full bg-[#F1EBE3] p-4 text-[#42352E]">
        {children}
      </Section>
    </Section>
  );
}
function H1({ children }: { children: React.ReactNode }) {
  return (
    <Heading className="-mb-1 mt-6 text-[20px] font-bold text-[#42352E]">
      {children}
    </Heading>
  );
}
function H2({ children }: { children: React.ReactNode }) {
  return (
    <Heading className="-mb-1 mt-6 text-[16px] font-bold text-[#42352E]">
      {children}
    </Heading>
  );
}

export const SITCON2024Email = () => {
  const previewText = `Hi {{ nickname }}，很高興能在 SITCON 2024 看到您！年會即將在下週六（03/09）揭開序幕，若您臨時有事無法來到現場一起共襄盛舉，請至官方換票樓將您的票卷釋出，讓其他有興趣參與但沒有票的朋友也能有機會一起參加活動。`;

  return (
    <Html lang="zh-TW">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="w-full max-w-full bg-[#F9F2E3] text-[#42352E]">
            <Img
              src={`https://sitcon.org/2024/mail/visual_bg.webp`}
              width="100%"
              alt="visual"
            />
            <Container className="mx-auto my-[40px] max-w-[465px] px-2 ">
              <Section className="w-full rounded bg-[#42352E] p-2 text-center text-[#C7D2CA]">
                若您無法順利閱讀此信件，請參閱 線上版本。
              </Section>
              <Text>
                Hi {`{{ nickname }}`}，<br />
                <br />
                很高興能在 SITCON 2024
                看到您！年會即將在下週六（03/09）揭開序幕，若您臨時有事無法來到現場一起共襄盛舉，請至
                官方換票樓
                將您的票卷釋出，讓其他有興趣參與但沒有票的朋友也能有機會一起參加活動。
                <br />
                <br />
                我們整理了一些實用的資訊，還請花 5 分鐘詳細閱讀：
              </Text>
              <TitleSection title="交通">
                <H1>活動地點</H1>
                <Text>
                  年會地點位於中央研究院
                  人文社會科學館（台北市南港區研究院路二段 128
                  號），詳細位置可以參考 SITCON 2024 官方網站 或中央研究院
                  院區導覽圖。
                </Text>
                <H1>接駁車</H1>
                <Text>
                  今年提供了自捷運南港展覽館站往返中研院人文社會科學館的免費接駁車，搭乘資訊如下：
                  <ul className="text-[14px]">
                    <li>發車時間：7:45～10:00，班距約 15～20 分鐘</li>
                    <li>
                      上車地點：捷運南港展覽館站 2A
                      出口公車停靠區（當天會有人舉牌引導）
                    </li>
                  </ul>
                </Text>
              </TitleSection>
              <TitleSection title="報到">
                <H1>報到時間及方式</H1>
                <Text>
                  年會將於早上 8 點半 開始領取迎賓袋，活動於 9 點
                  準時開始。在到達會場後，連上年會現場的
                  Wi-Fi，即可用「OPass」App
                  進行報到，並到會場四樓依工作人員指示排隊領取迎賓袋。十點半後請到三樓服務台領取迎賓袋。
                  請透過以下專屬連結下載、啟動 OPass：
                </Text>
                <Text className="text-center">
                  {`{{ App Link }}`}
                  <br />
                </Text>
                <Text>
                  若您無法使用 App 報到，請向服務台的工作人員出示 KKTIX 提供的
                  QR code 以完成手動報到。 請注意：
                  <ul className="text-[14px]">
                    <li>請務必在領取迎賓袋前再依工作人員指示按下領取按鈕 </li>
                    <li>
                      迎賓袋內有您的識別證，必須領取並且配戴後才能進入會議廳內。{" "}
                    </li>
                    <li>若您於 09:30 後才完成報到，恕不提供便當。 </li>
                  </ul>
                </Text>
                <H1>持學生票者，請出示相關證件</H1>
                <Text>
                  持有學生票的朋友，也請於<strong>報到前</strong>
                  備妥學生證或相關證明（在學證明、繳費完成之繳費單等），以節省您寶貴的時間。
                </Text>
              </TitleSection>
              <TitleSection title="年會活動">
                <Text>
                  除了一整天 精彩的議程，今年的 SITCON
                  也有許多有趣的活動可以參加！不論是抓緊機會表現自己，或是想在年會認識新朋友，都千萬別錯過囉！{" "}
                </Text>
                <H2>紀念品販售</H2>
                <Text>
                  在今年的年會中，我們推出了獨一無二的紀念品，有融合主視覺和可愛貓咪圖案的杯墊、精心設計的啤酒杯和紀念
                  T-shirt。別忘了來逛逛紀念品攤位，挑選屬於您的特別回憶！
                </Text>
                <H2>SITCON 導遊團</H2>
                <Text>
                  第一次參加研討會，總覺得眼花撩亂嗎？年會當天中午，有經驗的導遊們將帶大家拜訪年會志工、回憶展、社群攤位，實地了解
                  SITCON 的運作方式以及與會的各路夥伴！
                  <br />
                  <br />
                  有興趣參加 SITCON 導遊團的朋友，可以在早上 11 點整到 3F
                  白板區旁牆壁以及下午 2 點 40 分到 2F
                  靜態海報展現場尋找拿著旗子的導遊，導覽時間約 40 分鐘。
                </Text>
                <H2>Lightning Talk 閃電秀</H2>
                <Text>
                  Lightning Talk
                  中文譯為「閃電秀」，顧名思義即為「閃電一般短的演講」。有什麼想展現給全場所有人的技術、想法、甚至經驗談，都能把握這短短的
                  5 分鐘，在 SITCON 2024 的大舞台上讓大家看見您！ <br /> <br />
                  Lightning Talk 安排於年會閉幕前，於國際會議廳 (R0)
                  進行。當天上午 10:00 後會在 3F
                  白板區開放報名，名額有限、先搶先贏。
                </Text>
                <H2>大地遊戲</H2>
                <Text>
                  第一次參加
                  SITCON，還沒進入狀況嗎？今年有各式各樣的活動，除了精彩議程，還有靜態海報展、咖啡廳和攤位等等，還摸不著頭緒要先去哪裡逛逛嗎？還在猶豫該怎麼規劃最充實的時間利用嗎？別擔心！快點進
                  OPass「迷因拼圖」開始遊戲就對啦！
                  <br /> <br />
                  今年的大地遊戲，我們將 SITCON 2024
                  諸多年會相關活動都融合進了「迷因拼圖」遊戲中！邀請您來一同參與，邊玩邊破解今年所有有趣活動。除此之外，達成指定任務條件後，還可以至三樓講者服務台兌換
                  SITCON 2024 紀念禮品抽獎券哦～
                  <br /> <br />
                  完成越多任務、中獎機率越高！快點開始遊戲吧 {`(ﾉ>ω<)ﾉ`}
                </Text>
                <H2>天使計畫</H2>
                <Text>
                  天使計畫是一個提供會眾、工作人員、講者們之間交流機會的活動，在主辦方配對後，讓天使和初心者，甚至初心者之間相互分享、啟發，更深入瞭解SITCON！
                  <br /> <br />
                  小提醒：報名時有完整填寫天使計畫報名資料者會在 03/04
                  前收到配對通知信件，如未收到信件者，請確認是否掉在垃圾郵箱內。
                </Text>
                <H2>白板大戰</H2>
                <Text>
                  不論您是要宣傳社團、推廣
                  Vim、畫一隻貓、還是只是想說個嗨，白板大戰就是您的天空，透過揮灑創意的墨水，讓不同想法穿越時間進行對話，相互交織。
                  <br /> <br />
                  歡迎加入，白板大戰！
                </Text>
                <H2>靜態海報展</H2>
                <Text>
                  這是 SITCON 2024
                  的新嘗試，我們提供學生們一個展現自我的舞台，讓大家可以透過靜態海報發表自己做的研究，同時也能和志同道合的同學當面交流想法，碰撞出知識的火花！
                  <br /> <br />
                  在上午
                  11:40（上午場導遊團結束後），將會有海報作者出現與大家互動，可以趁機提問，歡迎一起加入這場學術派對！
                </Text>
                <H2>咖啡廳</H2>
                <Text>
                  在這裡，我們提供了悠閒的環境、舒適的空間，以及不可或缺的——咖啡，讓每個有需求的會眾都能在這裡找到屬於自己的小天地。無論你是想與人聊天、討論，或在精采的活動間稍微喘口氣，甚至是在此腦力激盪出一項專案，我們都歡迎！也有機會在這裡遇見靜態海報展的講者、和其一同切磋喔！
                </Text>
              </TitleSection>
              <Text>感謝您讀完這份行前簡介，期待在 SITCON 2024 與您見面～</Text>
              <Text>SITCON 2024 籌備團隊</Text>
              <Img
                src="https://sitcon.org/2024/logo_2024.png"
                width="300"
                alt="SITCON 2024 Logo"
                className="mx-auto my-8"
              />{" "}
              <Section className="w-full rounded-full bg-[#42352E] p-2 text-center text-[#C7D2CA]">
                若您無法順利閱讀此信件，請參閱 線上版本。
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SITCON2024Email.PreviewProps = {};

export default SITCON2024Email;
