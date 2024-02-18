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

function IconLink({ icon, href }: { icon: string; href: string }) {
  return (
    <Column>
      <center>
        <a href={href} className="mx-auto">
          <Img
            src={`https://sitcon.org/2024/mail/${icon}.png`}
            width="24"
            height="24"
            alt={icon}
          />
        </a>
      </center>
    </Column>
  );
}

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

function SITCON2024Email() {
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
                若您無法順利閱讀此信件，請參閱{" "}
                <a
                  href="https://sitcon.org/2024/mail/SITCON-2024.html"
                  className="text-[#DCCEBD]"
                >
                  線上版本
                </a>
                。
              </Section>
              <Text>
                Hi {`{{ nickname }}`}，<br />
                <br />
                很高興能在 SITCON 2024
                看到您！年會即將在下週六（03/09）揭開序幕，若您臨時有事無法來到現場一起共襄盛舉，請至
                <a href="https://www.facebook.com/events/350818157889474/permalink/351378694500087/">
                  官方換票樓
                </a>
                將您的票卷釋出，讓其他有興趣參與但沒有票的朋友也能有機會一起參加活動。
                <br />
                <br />
                我們整理了一些實用的資訊，還請花 5 分鐘詳細閱讀：
              </Text>
              <TitleSection title="交通">
                <H1>活動地點</H1>
                <Text>
                  年會地點位於<strong>中央研究院 人文社會科學館</strong>
                  （台北市南港區研究院路二段 128 號），詳細位置可以參考{" "}
                  <a href="https://sitcon.org/2024/traffic/">
                    SITCON 2024 官方網站
                  </a>{" "}
                  或中央研究院{" "}
                  <a href="https://file.apps.sinica.edu.tw/filepool/asweb/file/2023/2605xVrmDnbrVzHHAKAYtAeZ/asmap-00.pdf">
                    院區導覽圖
                  </a>
                  。
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
                  年會將於早上 <strong>8 點半</strong> 開始領取迎賓袋，活動於{" "}
                  <strong>9 點</strong> 準時開始。在到達會場後，連上年會現場的
                  Wi-Fi，即可用「OPass」App
                  進行報到，並到會場四樓依工作人員指示排隊領取迎賓袋。十點半後請到三樓服務台領取迎賓袋。
                  <br />
                  <br />
                  請透過以下專屬連結下載、啟動 OPass：
                </Text>
                <Text className="text-center">
                  <a href={`{{ App Link }}`}>{`{{ App Link }}`}</a>
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
                  除了一整天{" "}
                  <a href="https://sitcon.org/2024/agenda">精彩的議程</a>
                  ，今年的 SITCON
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
                  有興趣參加 SITCON 導遊團的朋友，可以在
                  <strong>早上 11 點整</strong>到 3F 白板區旁牆壁以及
                  <strong>下午 2 點 40 分</strong>到 2F
                  靜態海報展現場尋找拿著旗子的導遊，導覽時間約 40 分鐘。
                </Text>
                <H2>Lightning Talk 閃電秀</H2>
                <Text>
                  Lightning Talk
                  中文譯為「閃電秀」，顧名思義即為「閃電一般短的演講」。有什麼想展現給全場所有人的技術、想法、甚至經驗談，都能把握這短短的
                  <strong> 5 分鐘</strong>，在 SITCON 2024
                  的大舞台上讓大家看見您！ <br /> <br />
                  Lightning Talk 安排於年會閉幕前，於國際會議廳 (R0) 進行。當天{" "}
                  <strong>上午 10:00</strong> 後會在 3F 白板區開放報名，
                  <strong>名額有限、先搶先贏</strong>。
                </Text>
                <H2>大地遊戲</H2>
                <Text>
                  第一次參加
                  SITCON，還沒進入狀況嗎？今年有各式各樣的活動，除了精彩議程，還有靜態海報展、咖啡廳和攤位等等，還摸不著頭緒要先去哪裡逛逛嗎？還在猶豫該怎麼規劃最充實的時間利用嗎？別擔心！快點進
                  OPass「迷因拼圖」開始遊戲就對啦！
                  <br /> <br />
                  今年的大地遊戲，我們將 SITCON 2024
                  諸多年會相關活動都融合進了「迷因拼圖」遊戲中！邀請您來一同參與，邊玩邊破解今年所有有趣活動。除此之外，達成指定任務條件後，還可以至三樓講者服務台兌換
                  <strong>SITCON 2024 紀念禮品抽獎券</strong>哦～
                  <br /> <br />
                  完成越多任務、中獎機率越高！快點開始遊戲吧 {`(ﾉ>ω<)ﾉ`}
                </Text>
                <H2>天使計畫</H2>
                <Text>
                  天使計畫是一個提供會眾、工作人員、講者們之間交流機會的活動，在主辦方配對後，讓天使和初心者，甚至初心者之間相互分享、啟發，更深入瞭解SITCON！
                  <br /> <br />
                  <strong>小提醒：</strong>
                  報名時有完整填寫天使計畫報名資料者會在 03/04
                  前收到配對通知信件，如未收到信件者，請確認是否掉在垃圾郵箱內。
                </Text>
                <H2>白板大戰</H2>
                <Text>
                  不論您是要宣傳社團、推廣
                  Vim、畫一隻貓、還是只是想說個嗨，白板大戰就是您的天空，透過揮灑創意的墨水，讓不同想法穿越時間進行對話，相互交織。
                </Text>
                <Text className="text-center font-serif text-[16px] font-bold">
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
              <TitleSection title="會前資料">
                <H1>共筆及線上討論區</H1>
                <Text>
                  今年年會延續往年傳統，為各議程開設「共筆（HackMD）」與「議程線上討論區（Sli.do）」，共筆供聽眾一起編輯議程筆記，議程線上討論區則供講者與各位聽眾進行即時交流。各連結將公告於{" "}
                  <a href="https://sitcon.org/2024/">年會官方網站</a> 與
                  OPass。您可以在議程中隨時使用議程線上討論區匿名提問，講者能自由選擇時間解答及互動。籌辦團隊雖開設此平台，但並非強制所有與會者及講者必須使用，僅供各位利用參考。
                  連結：{" "}
                  <a href="https://hackmd.io/@SITCON/2024/ ">
                    https://hackmd.io/@SITCON/2024/
                  </a>
                </Text>
                <H1>論壇</H1>
                <Text>
                  有鑑於今年論壇議題較為深入，為使會眾能更好地與講者進行交流，可於年會前參考{" "}
                  <a href="https://ai-assembly.tw/">台灣人工智慧學校</a>
                  「先備知識區」，並於{" "}
                  <a href="https://app.sli.do/event/8UCaEp5r1AtDF2orAXUstd">
                    slido
                  </a>{" "}
                  進行提問。
                  期待您提出各式難題，望能藉由此次論壇，為您開闢全新的視野。
                </Text>
              </TitleSection>
              <TitleSection title="食物">
                <Text>
                  為了讓大家能愉快的交流，年會為各位準備了午餐與各式點心。場地內除了用餐區以外，皆禁止飲食，只能帶有蓋水瓶進出，還請各位多多配合了
                  (´・ω・`)
                  <ul className="text-[14px]">
                    <li className="mb-4">
                      <strong>午餐</strong>：美味的午餐將從上午 11 點開始，於 4F
                      國際會議廳（R0）後方兩側的轉角處發放；素食則在 4F
                      北側領取，請各位不要跑錯囉！
                      <br />
                      <br />
                      領餐時，請準備好您的 OPass
                      App，等待工作人員指示後，按下按鈕領取午餐。
                      （若您報到時未使用 App，請出示手動報到時取得的午餐券）
                      領取完午餐可至 4F 走廊旁的戶外用餐區用餐～
                    </li>

                    <li>
                      <strong>點心</strong>
                      ：下午 3 點 25 分開始，4F
                      兩側的社群攤位走廊上將提供精緻茶點，您可以在享用下午茶的同時，與現場的會眾以及攤位交流。
                    </li>
                  </ul>
                  如果您有環保餐具，也請別忘記隨身攜帶，為地球盡一份心力。
                </Text>
              </TitleSection>
              <TitleSection title="網路">
                <Text>
                  現場可使用年會提供的無線網路，SSID 為「SITCON_via
                  KlickKlack」，密碼為「20240309」，也可以透過 OPass 的會場 WiFi
                  功能加入。
                  <br /> <br />
                  請勿於會場私自架設無線基地台（AP），或進行任何干擾公眾網路之行為。
                  <br /> <br />
                  若您需要使用個人行動網路熱點，請使用 USB 分享網路連線。
                </Text>
              </TitleSection>
              <TitleSection title="遺失物">
                <Text>
                  若您在現場遺失物品或拾獲遺失物，請填寫下方表單並前往大會服務台諮詢服務台人員：
                  我遺失 / 撿到東西了，填寫表單：
                  <a href="https://forms.gle/mEnzUn3oxn9qz4JT6">
                    https://forms.gle/mEnzUn3oxn9qz4JT6
                  </a>
                  <br />
                  公開檢索表格：
                  <a href="https://reurl.cc/WRAXqO">https://reurl.cc/WRAXqO</a>
                </Text>
              </TitleSection>
              <TitleSection title="其他">
                <Text>
                  年會當天的線上聊天室十分精彩，您可以和其他與會者抬槓、甚至找到志同道合的夥伴！除了加入{" "}
                  <a href="https://t.me/SITCONgeneral">
                    Telegram @SITCONgeneral 群組
                  </a>{" "}
                  以外，也可以到{" "}
                  <a href="https://discord.gg/KFWnPbQ2K4">
                    Discord SITCON 伺服器
                  </a>{" "}
                  和大家互相切磋。
                  <br />
                  <br />
                  最後，也請您務必閱讀並一同遵守{" "}
                  <a href="https://sitcon.org/code-of-conduct/">
                    SITCON 行為準則
                  </a>
                  ，讓大家都能開心的在 SITCON 齊聚一堂，彼此激盪、傳承、啟發。
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
                <Row>
                  <IconLink href="https://sitcon.org/twitter" icon="twitter" />
                  <IconLink href="https://sitcon.org/fb" icon="facebook" />
                  <IconLink href="https://sitcon.org/flickr" icon="flickr" />
                  <IconLink
                    href="https://sitcon.org/instagram"
                    icon="instagram"
                  />
                  <IconLink href="https://sitcon.org/tg" icon="telegram" />
                  <IconLink href="https://sitcon.org/yt" icon="youtube" />
                </Row>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

SITCON2024Email.PreviewProps = {};

export default SITCON2024Email;
