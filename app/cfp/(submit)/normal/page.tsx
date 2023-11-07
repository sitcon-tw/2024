"use client";
import Title from "@/components/cfp/Title";
import Event, { EventType } from "@/components/cfp/Event";
import { Required, Public, Optional } from "@/components/cfp/Badge";
import Card from "@/components/cfp/Card";
import Subtitle from "@/components/cfp/Subtitle";
import Toc from "@/components/cfp/Toc";

export default function Page() {
  const tocs = [
    { link: "#time", name: "重要時程" },
    { link: "#type", name: "議程種類" },
    { link: "#eg", name: "投稿主題範例" },
    { link: "#attype", name: "投稿格式" },
    { link: "#check", name: "審稿方式" },
  ];

  return (
    <div className="flex flex-col lg:flex-row-reverse relative gap-6">
      <Toc sections={tocs} />
      <div className="flex flex-col overflow-hidden">
        <div>
          <Title>一般議程</Title>
          <Subtitle id="time">重要時程</Subtitle>
        </div>
        <div>
          <Event
            time={[2023, "Nov.", 19]}
            type={["general"]}
            selectedType={""}
            name="開始徵稿"
          />
          <Event
            time={[2024, "Jan.", 20]}
            type={["general"]}
            selectedType={""}
            name="投稿截止"
            desc="至 2024 年 1 月 20 日（六）23:59"
          />
          <Event
            time={[2024, "Jan.", "下旬"]}
            type={["general"]}
            selectedType={""}
            name="稿件錄取通知"
          />
          <Event
            time={[2024, "Jan.", "下旬"]}
            endTime={[2024, "Feb.", "中旬"]}
            type={["general"]}
            selectedType={""}
            name="試講"
            desc="若稿件入選，確切時間將再與您協調"
          />
          <Event
            time={[2024, "Mar.", 8]}
            type={["general"]}
            selectedType={""}
            name="彩排"
          />
          <Event
            time={[2024, "Mar.", 9]}
            type={["SITCON"]}
            selectedType={""}
            name="年會"
          />
        </div>

        <div className="content">
          <Subtitle id="type">議程種類</Subtitle>
          <div className="flex flex-row items-center justify-center space-x-12">
            <p>Presentation</p>
            <p>Espresso</p>
          </div>

          <Subtitle id="eg">投稿主題範例</Subtitle>
          <div>
            <p>
              SITCON
              作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。
            </p>
            <p className="mt-4">
              任何與資訊科技、電腦技術相關的講題，我們都非常歡迎投稿！
            </p>
            <p className="mt-4">
              除此之外，您也可以透過參與投稿者小聚或前往 SITCON 歷年網站（
              <a
                href="https://sitcon.org/2013/"
                className="link"
                target="_blank"
              >
                2013
              </a>
              、
              <a
                href="https://sitcon.org/2014/"
                className="link"
                target="_blank"
              >
                2014
              </a>
              、
              <a
                href="https://sitcon.org/2015/"
                className="link"
                target="_blank"
              >
                2015
              </a>
              、
              <a
                href="https://sitcon.org/2016/"
                className="link"
                target="_blank"
              >
                2016
              </a>
              、
              <a
                href="https://sitcon.org/2017/"
                className="link"
                target="_blank"
              >
                2017
              </a>
              、
              <a
                href="https://sitcon.org/2018/"
                className="link"
                target="_blank"
              >
                2018
              </a>
              、
              <a
                href="https://sitcon.org/2019/"
                className="link"
                target="_blank"
              >
                2019
              </a>
              、
              <a
                href="https://sitcon.org/2020/"
                className="link"
                target="_blank"
              >
                2020
              </a>
              、
              <a
                href="https://sitcon.org/2021/"
                className="link"
                target="_blank"
              >
                2021
              </a>
              、
              <a
                href="https://sitcon.org/2022/"
                className="link"
                target="_blank"
              >
                2022
              </a>
              ）查看過去的議程。
            </p>
          </div>

          <h3 className="text-2xl mt-8 font-medium">
            以下是我們選出以往的優良議程，提供給您參考：
          </h3>

          <h2 className="text-2xl mt-8 font-medium"> PRESENTATION</h2>
          <div className="leading-[35px]">
            {/* purple */}
            <p>
              Presentation <span className="text-purple"> 共 40 分鐘</span>
              ，包含完整 30 分鐘的議程與 10 分鐘的問答時間，
            </p>
            <p>讓您有充分的時間展示想法、描述經歷、和與會者交流</p>
          </div>

          <h2 className="text-2xl mt-8 font-medium">ESPRESSO</h2>

          <div className="leading-[35px]">
            {/* purple */}
            <p>
              Espresso <span className="text-purple">僅有 10 分鐘</span>
              ，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。
            </p>
          </div>

          <Subtitle id="attype">投稿格式</Subtitle>
          <p>
            各議程類型的投稿格式相同，除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。
          </p>

          <h3 className="text-2xl leading-[75px] font-medium">稿件資訊</h3>

          <h4 className="font-bold">
            投稿類型 Type <Required /> <Public />
          </h4>
          <small>
            請寫明所欲投稿為何種議程類型（Presentation、Espresso）。
          </small>

          <h4 className="font-bold">
            題目 Title <Required /> <Public />
          </h4>
          <small>請不要超出 20 字。</small>

          <h4 className="font-bold">
            摘要 Abstract <Required /> <Public />
          </h4>
          <small>建議 150–250 字，使用於宣傳與網站公告。</small>

          <h4 className="font-bold">
            演講大綱 Outline <Required />
          </h4>
          <small>
            請說明議程的內容大綱與時間分配。若為多位講者共同分享，請說明各個講者如何分配演講內容。
          </small>

          <h4 className="font-bold">
            目標受眾 Target Audience <Required />
          </h4>
          <small>
            請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「欲精進某技能的後端工程師」等。
          </small>
          <small>
            在這邊為您提供過往的會眾比例：大學生 45%、高中/職生 38%、社會人士
            10%、研究生 5%、國中生 2%
          </small>

          <h4 className="font-bold">
            先備知識 Prior Knowledge <Required /> <Public />
          </h4>
          <small>
            請說明該議程的與會者所需具備的先備知識。例如：「能理解 Python
            基礎語法」、「能熟練運用 Class 與 OOP」等。
          </small>

          <h4 className="font-bold">
            主題標籤 Labels <Required /> <Public />
          </h4>
          <small>
            請填寫 1~4 個該議程相關的領域與知識標籤，例如：ML、Data
            Science、資安紅隊、blockchain、新手適合、社團等；錄取後會與講者溝通微調後公開於官網議程表。
          </small>

          <h4 className="font-bold">
            詳細說明 Description <Required />
          </h4>
          <small>
            不限字數，請說明這個議程您認為重要的相關細節，以利審稿委員更瞭解您的議程。
          </small>

          <h4 className="font-bold">
            附件 Attachment <Optional />
          </h4>
          <small>
            可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件，請再三確認是否有開啟共用權限。
          </small>

          <h3 className="text-2xl mt-8 font-medium">個人資料</h3>
          <p className="font-bold">
            除了暱稱 /
            名字被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
          </p>

          <h4 className="font-bold">
            電子郵件 Email <Required />
          </h4>
          <small>
            能讓大會聯絡的電子信箱。（注意：請您在大會的聯絡過程中，維持使用相同信箱）
          </small>

          <h4 className="font-bold">
            暱稱 / 名字 Name <Required /> <Public />
          </h4>
          <small>公開於講者海報及網站的稱呼。</small>

          <h4 className="font-bold">
            自我介紹 Self Introduction <Required /> <Public />
          </h4>
          <small>
            公開於講者海報及網站，將有助於會眾更加了解有關你的資訊。
          </small>

          <h4 className="font-bold">
            手機號碼 Phone <Required />
          </h4>
          <small>用於大會聯絡、確認資訊用的電話號碼。</small>

          <h4 className="font-bold">
            其他聯絡方式 Other contact information <Required />
          </h4>
          <small>
            其他任何我們能聯絡您的方式（如 Telegram
            ID、住處電話等），以利我們在審稿時即時向您釐清投稿資訊。
          </small>

          <Subtitle id="check">審稿方式</Subtitle>
          <p>
            稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
            工作人員、業界人士及學界人士組成。
          </p>
          <p>審稿委員將針對以下項目進行篩選：</p>
          <div>
            <ul className="list-disc list-ouside">
              <li>
                <span className="text font-bold">稿件內容：</span>
                知識分享、經驗案例、想法觀點是否獨特等。
              </li>
              <li>
                <span className="text font-bold">表達能力：</span>
                提供的資料是否有條理、文句暢通，以及提供資料之完整度。完整的資料能讓審稿委員更清楚了解演講細節。
              </li>
              <li className="mb-32">
                <span className="text font-bold">適合聽眾：</span>稿件是否適合
                SITCON
                大多數的與會者。經我們評估比較熱門的議程，將安排在較大的演講廳。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
