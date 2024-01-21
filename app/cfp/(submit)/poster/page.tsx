"use client";
import Title from "@/components/cfp/Title";
import Event from "@/components/cfp/Event";
import { Required, Public } from "@/components/cfp/Badge";
import Subtitle from "@/components/cfp/Subtitle";
import Toc from "@/components/cfp/Toc";
import SubmissionBtn from "@/components/cfp/SubmissionBtn";

export default function Page() {
  const tocs = [
    { link: "#time", name: "重要時程" },
    { link: "#description", name: "海報投稿說明" },
    { link: "#format", name: "投稿格式" },
    { link: "#review", name: "審稿方式" },
    { link: "#present", name: "佈展與其它" },
  ];

  return (
    <div className="flex flex-col lg:flex-row-reverse relative gap-6">
      <Toc sections={tocs}>
        <SubmissionBtn href="https://forms.gle/LmkTzxLKMdTHDu2d7" />
      </Toc>
      <div className="flex flex-col mb-12">
        <Title>海報投稿</Title>
        <Subtitle id="time">重要時程</Subtitle>
        <div>
          <Event time={[2023, "Nov.", 19]} type={["poster"]} name="開始徵稿" />
          <Event
            time={[2024, "Jan.", 24]}
            type={["poster"]}
            name="投稿截止"
            desc="延長至 2024 年 1 月 24 日（三）23:59"
          />
          <Event
            time={[2024, "Jan.", "下旬"]}
            type={["poster"]}
            name="稿件錄取通知"
          />
          <Event
            time={[2024, "Feb.", 18]}
            type={["poster"]}
            name="錄取海報檔案上傳截止"
          />
          <Event time={[2024, "Mar.", 9]} type={["SITCON"]} name="年會" />
        </div>

        <div className="content">
          <Subtitle id="description">海報投稿說明</Subtitle>
          <p>
            海報投稿以靜態海報展出學生個人或團隊專案研究作品，作品以資訊相關領域為主，不限語言，不接受一稿多投，若為延伸作品需於投稿時載明。期望透過此方式使更多學生能有展現自我的機會，同時為會眾帶來不同形式的學習與交流。
          </p>

          <Subtitle id="format">投稿格式</Subtitle>
          <p>除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。</p>
          <h3>稿件資訊</h3>
          <h4>
            題目 Project Title <Required /> <Public />
          </h4>
          <small>長度請自行斟酌。</small>
          <h4>
            摘要 Abstract <Required /> <Public />
          </h4>
          <small>建議約 350 字，使用於宣傳與網站公告。</small>
          <h4>
            主題標籤 Labels <Required /> <Public />
          </h4>
          <small>
            請填寫 1~3 個與海報內文相關的領域與知識標籤，例如：ML、Data
            Science、資安、NLP 等；錄取後會與提供稿件作者溝通微調後公開於官網。
          </small>
          <h4>
            研究說明 Project Content <Required />
          </h4>
          <small>
            請以 PDF 檔案上傳，需簡要說明：
            <ul className="list-disc ml-4">
              <li>（一）研究動機與目的 Research Question or Problem</li>
              <li>（二）研究方法與過程 Methodology</li>
              <li>
                （三）研究結果與討論 Results and Interpretation of These Results
              </li>
              <li>（四）結論應用及展望 Conclusions 等</li>
            </ul>
            以 600~1500 字為限。可參考{" "}
            <a
              href="https://twsf.ntsec.gov.tw/FileAtt.ashx?fcode=AC1C403BD297CA5A6A628EBAD362874E&lang=1"
              className="text-blue underline"
            >
              臺灣國際科學展覽會實施要點
            </a>{" "}
            第 17 頁說明。
          </small>
          <h4>
            海報內容 Poster Content <Public />
          </h4>
          <small>
            <span className="text-purple font-bold">錄取後上傳</span>
            。以呈現研究結果為主，除題目與摘要之外，建議依序可包含前言、研究方法、結論及參考文獻等，內容請投稿作者自行斟酌，以不超過海報尺寸為限，大會方將會提供參考模板給錄取者。
            <span className="text-purple font-bold">
              請以直版寬 841 mm、高 1189 mm（A0 大小）規格製作為 PDF 檔案
            </span>
            ，一篇投稿一面看板，請於收到錄取通知後依據郵件說明於 2024 年 2 月 18 日前上傳最終版海報檔案，
            <span className="text-purple font-bold">
              統一由大會進行印製與佈展
            </span>
            。
            <br />
            海報格式：
            <ul className="list-disc ml-4">
              <li>
                中文名稱：字體大小範圍為 70 號字〜90
                號字，且建議最多不超過兩行，置中對齊方式。
              </li>
              <li>
                英文名稱：字體大小範圍為 40 號字〜80
                號字，且建議最多不超過兩行，置中對齊方式。
              </li>
              <li>
                作者中、英文姓名：字體大小範圍建議 30 號字〜40 號字，置中對齊方式。
              </li>
              <li>海報頁面的上下側及左右邊各留至少 5 公分。</li>
              <li>
                內文中文建議以標楷體或黑體書寫、英文以 Times New Roman 書寫。
              </li>
              <li>
                圖表需以良好解析度呈現，可以列在文中，或列在參考文獻之後。列在文中者，請盡量靠近文中第一次提及的地方。各圖、表請備說明內容，圖的說明應置於圖的下方，而表的說明則應置於表的上方。
              </li>
            </ul>
          </small>
          <h4>其他說明 Additional Instructions</h4>
          <small>其他以上未提及之說明，若為延續性研究作品也請在此標明。</small>

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
          <small>
            公開於講者海報旁及網站的稱呼，
            <span className="text-purple font-bold">
              至多三人
            </span>
            。
          </small>
          <h4>
            自我介紹 Self Introduction <Required /> <Public />
          </h4>
          <small>
            公開於講者海報旁及網站，將有助於會眾更加了解有關你的資訊。
          </small>
          <h4>
            聯絡方式 Contact Information <Required /> <Public />
          </h4>
          <small>
            請提供聯絡方式的「連結網址」（亦可提供電子郵件或電話，請擇一），
            由大會印製與設計成 QR code 貼於年會當天的海報旁，將有助會眾更容易與你交流。
            （連結網址不限 Facebook、Instagram、Telegram、Linktree 等）
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
              題材創新性：研究專案內容與方法具原創與可行性，產生貢獻或影響之潛力。
            </li>
            <li>
              作品完整度：提供的資料是否具備基本學術倫理、適切性、系統性。我們偏好完整的資料，讓審稿委員更清楚了解專案細節。
            </li>
            <li>表達完整性：文句暢通，且文意清楚周全。</li>
          </ul>

          <Subtitle id="present">佈展與其它</Subtitle>
          <p>
            請以
            <span className="text-purple font-bold">
              直版寬 841 mm、高 1189 mm （A0 大小）規格製作為 PDF 檔案
            </span>
            ，一篇投稿一面看板，請於收到錄取通知後依據郵件說明上傳最終版海報檔案，統一由大會進行印製與佈展。
          </p>
          <p>佈展方式與地點：地點於 2 樓梯廳，其餘細節將於稿件錄取後通知。</p>
          <p>補充說明：</p>
          <ul className="list-disc ml-4">
            <li>
              海報投稿
              <span className="text-purple font-bold">
                不辦理
              </span>
              彩排與試講。
            </li>
            <li>錄取後會請作者填寫表單，在可配合的時段於海報旁與會眾交流。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
