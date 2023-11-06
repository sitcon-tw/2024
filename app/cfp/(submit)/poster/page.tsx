import Title from "@/components/cfp/Title";
import Event from "@/components/cfp/Event";
import { Required, Public } from "@/components/cfp/Badge";
import Subtitle from "@/components/cfp/Subtitle";
import Toc from "@/components/cfp/Toc";

export default function Page() {
  const tocs = [
    { link: "#time", name: "重要時程" },
    { link: "#description", name: "海報投稿說明" },
    { link: "#format", name: "投稿格式" },
    { link: "#review", name: "審稿方式" },
    { link: "#present", name: "佈展" },
  ];

  return (
    <div className="flex flex-col lg:flex-row-reverse relative">
      <Toc sections={tocs} />
      <div className="flex flex-col mb-12">
        <Title>海報 Poster</Title>

        <Subtitle id="time">重要時程</Subtitle>
        <div>
          <Event time={[2023, "Nov.", 19]} type={["poster"]} name="開始徵稿" />
          <Event
            time={[2024, "Jan.", 20]}
            type={["poster"]}
            name="投稿截止"
            desc="至 2024 年 1 月 20 日（六）23:59"
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
            中文題目 Chinese Project Title <Required /> <Public />
          </h4>
          <small>長度請自行斟酌。</small>
          <h4>
            英文題目 English Project Title <Required /> <Public />
          </h4>
          <small>長度請自行斟酌。</small>
          <h4>
            摘要 Abstract <Required /> <Public />
          </h4>
          <small>建議約 350 字，使用於宣傳與網站公告。</small>
          <h4>
            關鍵詞 Keywords <Required /> <Public />
          </h4>
          <small>至多三個。</small>
          <h4>
            研究說明 Project Content <Required />
          </h4>
          <small>
            請以 pdf 檔案上傳，需簡要說明（一）研究動機與目的 Research Question
            or Problem；（二）研究方法與過程 Methodology；（三）研究結果與討論
            Results and Interpretation of these results；（四）結論應用及展望
            Conclusions 等，以 600~1500 字為限。可參考{" "}
            <a
              href="https://twsf.ntsec.gov.tw/FileAtt.ashx?fcode=AC1C403BD297CA5A6A628EBAD362874E&lang=1"
              className="text-blue underline"
            >
              臺灣國際科學展覽會實施要點
            </a>{" "}
            第 17 頁說明。
          </small>
          <h4>海報內容 Poster Content</h4>
          <small>
            <span className="text-purple>">錄取後上傳</span>
            。以呈現研究結果為主，除題目與摘要之外，建議依序可包含前言、研究方法、結論及參考文獻等，內容請投稿作者自行斟酌，以不超過海報尺寸為限。
            <span className="text-purple>">
              請以直版寬 841 mm、高 1189 mm (A0 大小)規格製作為 pdf 檔案
            </span>
            ，一篇投稿一面看板，請於收到錄取通知後依據郵件說明上傳最終版海報檔案，
            <span className="text-purple>">統一由大會進行印製與佈展</span>。
          </small>
          <h4>其他說明 Additional Instructions</h4>
          <small>其他以上未提及之說明，若為延續性研究作品也請在此標明。</small>

          <h3>個人資料</h3>
          <p>
            除了暱稱 /
            名字被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
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
          <small>公開於講者海報及網站的稱呼，至多三人。</small>
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
            其他聯絡方式 Other contact information <Required />
          </h4>
          <small>
            其他任何我們能聯絡您的方式（如 Telegram
            ID、住處電話等），以利我們在審稿時即時向您釐清投稿資訊。
          </small>

          <h3>海報格式建議參酌</h3>
          <ul className="list-disc list-outside ml-4">
            <li>
              中文名稱：字體大小範圍為 70 號字〜90
              號字，且最多不可超過兩行，置中對齊方式。
            </li>
            <li>
              英文名稱：字體大小範圍為 40 號字〜80
              號字，且最多不可超過兩行，置中對齊方式。
            </li>
            <li>
              作者中、英文姓名：字體大小範圍 30 號字〜40 號字，置中對齊方式。
            </li>
            <li>
              學校系所或單位名稱 (全銜)：字體大小範圍 30 號字〜40
              號字，置中對齊方式。
            </li>
            <li>海報紙上下側及左右邊各留至少 5 公分。</li>
            <li>內文中文以標楷體或黑體書寫、英文請以 Times New Roman 書寫。</li>
            <li>
              圖表需以良好解析度呈現，可以列在文中，或列在參考文獻之後。列在文中者，請盡量靠近文中第一次提及的地方。各圖、表請備說明內容，圖的說明應置於圖的下方，而表的說明則應置於表的上方。
            </li>
          </ul>

          <Subtitle id="review">審稿方式</Subtitle>
          <p>
            稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
            工作人員、業界人士及學界人士組成。
          </p>
          <p>審稿委員將針對以下項目進行篩選：</p>
          <ul className="list-disc list-outside ml-4">
            <li>
              題材創新性：研究專案內容與方法具原創與可行性，產生貢獻或影響之潛力。
            </li>
            <li>
              作品完整度：提供的資料是否具備基本學術倫理、適切性、系統性。我們偏好完整的資料，讓審稿委員更清楚了解專案細節。
            </li>
            <li>表達完整性：文句暢通，且文意清楚周全。</li>
          </ul>

          <Subtitle id="present">佈展</Subtitle>
          <p>
            請以直版寬 xx 公分、高 xx 公分規格製作為 pdf
            檔案，一篇投稿一面看板，請於收到錄取通知後依據郵件說明上傳最終版海報檔案，統一由大會進行印製與佈展。
          </p>
          <p>佈展方式：(說明佈展展板形式)</p>
          <p>佈展地點：TBD</p>
        </div>
      </div>
    </div>
  );
}
