"use client";
import Title from "@/components/cfp/Title";
import Event from "@/components/cfp/Event";
import Card from "@/components/cfp/Card";
import { Required, Public, Optional } from "@/components/cfp/Badge";
import SubmissionBtn from "@/components/cfp/SubmissionBtn";
import Subtitle from "@/components/cfp/Subtitle";
import Toc from "@/components/cfp/Toc";

export default function Page() {
  const tocs = [
    { link: "#time", name: "重要時程" },
    { link: "#description", name: "議程說明" },
    { link: "#format", name: "投稿格式" },
    { link: "#review", name: "審稿方式" },
  ];

  return (
    <div className="flex flex-col lg:flex-row-reverse relative gap-6">
      <Toc sections={tocs}>
        <SubmissionBtn href="https://docs.google.com/forms/d/e/1FAIpQLSfRIRgHbDAuM6MD7BjMGgh01tu3uCaf7fApJ0rEgEEh4QjTcA/viewform" />
      </Toc>
      <div className="flex flex-col mb-12">
        <Title>開放式議程</Title>
        <Subtitle id="time">重要時程</Subtitle>
        <div>
          <Event
            time={[2023, "Nov.", 19]}
            type={["undefined"]}
            name="開始徵稿"
          />
          <Event
            time={[2024, "Jan.", 20]}
            type={["undefined"]}
            name="投稿截止"
            desc="至 2024 年 1 月 20 日（六）23:59"
          />
          <Event
            time={[2024, "Jan.", "下旬"]}
            type={["undefined"]}
            name="稿件錄取通知"
          />
          <Event
            time={[2024, "Jan.", "下旬"]}
            type={["undefined"]}
            endTime={[2024, "Feb.", "中旬"]}
            name="試講"
            desc="若稿件入選，確切時間將再與您協調"
          />
          <Event time={[2024, "Mar.", 8]} type={["undefined"]} name="彩排" />
          <Event time={[2024, "Mar.", 9]} type={["SITCON"]} name="年會" />
        </div>

        <div className="content">
          <Subtitle id="description">議程說明</Subtitle>
          <p>
            開放式議程為{" "}
            <span className="text-purple font-bold">40 分鐘的議程</span>{" "}
            ，該議程不限定進行方式，希望跳脫傳統議程框架，透過雙向互動、實作等，任何你想得到的非傳統形式進行此場議程。
          </p>
          <h3>什麼是開放式議程？</h3>
          <p>
            在追求創新的時代，我們為講者提供了開放式議程這個選項，跳脫講者對聽眾單向陳述式的演講，開放式議程更加強調主講者和與會者的
            <span className="text-purple font-bold">雙向交流</span>。SITCON
            作為學生展現自己的舞台，我們期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是一同探討學生相關議題等。
          </p>
          <p>對於還在猶豫的講者們，以下是我們提供的幾種議程形式範例：</p>
          <div className="grid grid-rows-3 gap-3 lg:grid-cols-2 lg:grid-rows-1 lg:gap-[14px] my-10">
            <Card title="議題探討形式" varient="pink">
              資訊發展快速，卻也延伸出許多可以深入討論的議題，我們期待透過講者的引言，拋磚引玉，激發聽眾的想法，透過互相討論的模式為這些議題提出不一樣的看法與觀點。
              例如：人工智慧是否會有自我意識？
            </Card>
            <Card title="經驗交流形式" varient="purple">
              不同於一般議程，在開放式議程中的經驗分享可以變得十分多元，我們期待講者透過分享自己在資訊領域遇到的難題和解決方式，並以此為開端，與聽眾碰撞出更多的論點與討論。例如：學測還是特殊選才？我如何在學科與術科中做選擇？
            </Card>
            <Card
              title="更多形式由您來創造"
              varient="green"
              className="lg:col-span-2"
            >
              不只有上述的形式，我們非常歡迎其他形式的議程。
              <br />
              無論是主持一場圓桌會議，一起腦力激盪，甚至舉辦一場小競賽，任何你想得到的非傳統議程形式都可以在開放式議程中進行！
            </Card>
          </div>

          <Subtitle id="format">投稿格式</Subtitle>
          <p>除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。</p>

          <h3>稿件資訊</h3>
          <h4>
            題目 Title <Required /> <Public />
          </h4>
          <small>請不要超出 20 字。</small>
          <h4>
            摘要 Abstract <Required /> <Public />
          </h4>
          <small>建議 150–250 字，使用於宣傳與網站公告。</small>
          <h4>
            進行模式 Method <Required /> <Public />
          </h4>
          <small>
            不限字數，請詳細說明該議程預計如何和會眾互動，以及是否需要額外的工具，此項目將幫助會眾預期該如何參與此議程。
          </small>
          <h4>
            議程大綱 Outline <Required />
          </h4>
          <small>請說明該開放式議程的大綱及時間長度規劃。</small>
          <h4>
            目標受眾 Target Audience <Required />
          </h4>
          <small>
            請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「不知道該不該讀研究所的學生」等。
          </small>
          <h4>
            先備知識 Prior Knowledge <Required /> <Public />
          </h4>
          <small>
            請說明該議程的與會者所需具備的先備知識。例如：「能理解 Python
            基礎語法」、「略懂 108 課綱現況」等。
          </small>
          <h4>
            主題標籤 Labels <Required /> <Public />
          </h4>
          <small>
            請填寫 1~4 個該議程相關的領域與知識標籤，例如：ML、Data
            Science、資安紅隊、blockchain、新手適合、社團等；錄取後會與講者溝通微調後公開於官網議程表。
          </small>
          <h4>
            詳細說明 Description <Required />
          </h4>
          <small>
            不限字數，請說明這個議程您認為重要的相關細節，以利審稿委員更瞭解您的議程。
          </small>
          <h4>
            附件 Attachment <Optional />
          </h4>
          <small>
            可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件，請再三確認是否有開啟共用權限。
          </small>

          <h3>個人資料</h3>
          <p>
            除了暱稱 /
            名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
          </p>
          <h4>
            電子郵件 Email <Required />
          </h4>
          <small>
            能讓大會聯絡的電子信箱。（注意：請您在大會的聯絡過程中，維持使用相同信箱）
          </small>
          <h4>
            暱稱 / 名字 Name <Required /> <Public />
          </h4>
          <small>公開於講者海報及網站的稱呼。</small>
          <h4>
            自我介紹 Self Introduction <Required /> <Public />
          </h4>
          <small>
            公開於講者海報及網站，將有助於會眾更加了解有關你的資訊。
          </small>
          <h4>
            手機號碼 Phone <Required />
          </h4>
          <small>用於大會聯絡、確認資訊用的電話號碼。</small>
          <h4>
            其他聯絡方式 Other Contact Information <Required />
          </h4>
          <small>
            其他任何我們能聯絡您的方式（如 Telegram
            ID、住處電話等），以利我們在審稿時即時向您釐清投稿資訊。
          </small>

          <Subtitle id="review">審稿方式</Subtitle>
          <p>
            稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
            工作人員、業界人士及學界人士組成。
          </p>
          <p>審稿委員將針對以下項目進行篩選：</p>
          <ul className="list-disc ml-4">
            <li>
              稿件內容：講者是否熟悉這個題目、和會眾的交流效果、可執行性等等。
            </li>
            <li>
              表達能力：提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度。我們偏好完整的資料，讓審稿委員更清楚了解演講細節。
            </li>
            <li>適合聽眾：稿件是否適合 SITCON 大多數的與會者討論。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
