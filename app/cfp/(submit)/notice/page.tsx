import Subtitle from "@/components/cfp/Subtitle";
import Title from "@/components/cfp/Title";
import Toc from "@/components/cfp/Toc";
export default function Page() {
  const tocs = [
    { link: "#notice", name: "投稿注意事項" },
    { link: "#auth", name: "授權" },
  ];
  return (
    <div className="flex flex-col lg:flex-row-reverse relative gap-6">
      <Toc sections={tocs} />
      <div className="flex flex-col mb-5">
        <Title>投稿注意事項與授權</Title>
        <Subtitle id="notice">投稿注意事項</Subtitle>
        <ul className="list-disc ml-4">
          <li>
            除非內容明顯偏離講題、違反 CoC
            或不符事實，我們不會強制要求講者對演講內容進行修正
          </li>
          <li>
            「議程題目」、「摘要」與「先備知識」將放置於官方網站與大會發行的文宣中
          </li>
          <li>在截稿之前，投稿者可以隨時透過表單回函修改已送出的稿件</li>
          <li>
            審稿過程不考慮稿件內容的難度。我們以稿件是否能夠吸引人、高品質、適合聽眾為考量
          </li>
          <li>
            若 SITCON
            議程組認為您的稿件比較適合另一種形式，或者該形式的名額已經額滿、無法再增額時，我們會向您充分說明與溝通，並經您的同意後，轉換稿件類型或時間長度
          </li>
          <li>
            SITCON 2024
            將會有多軌議程及各式場外活動同時進行，與會者可以自行決定要參與哪一場議程或活動
          </li>
          <li>
            為鼓勵投稿，大會提供投稿者一組報名邀請碼（一稿一組，每人最多一組），可優先報名參與本年會。若您的稿件被接受，年會將頒予感謝狀以表彰您的熱情付出與貢獻，並額外提供講者身分入場，屆時您可以將年會邀請碼贈與他人使用，邀請親朋好友共襄盛舉
          </li>
          <li>
            若同一稿件有多個講者，請在「暱稱 /
            名字」欄位標示所有講者的稱呼，並在「演講大綱」詳細說明各個講者如何分配演講內容。稿件經接受者，無論講者人數，皆只提供一組可轉贈的入場票邀請碼、一份講者識別證與一份講者專屬迎賓禮。未佩戴識別證的講者，僅能在自己的演講時，於該議程時段進入議程所在的會議廳
          </li>
        </ul>
        <p>
          若有任何問題或投稿建議，請來信 SITCON 議程組信箱 session@sitcon.org。
        </p>
        <Subtitle id="auth">授權</Subtitle>
        <p>
          今年將採取實體與線上同步之模式進行，除開放式議程外，年會當天將對每一場議程進行直播串流。如果您同意以{" "}
          <a
            target="_blank"
            className="link"
            href="https://creativecommons.org/licenses/by/4.0/"
          >
            創用 CC「姓名標示」4.0
          </a>{" "}
          授權釋出議程錄影，我們將會上傳至{" "}
          <a
            target="_blank"
            className="link"
            href="https://www.youtube.com/c/SITCONArchive"
          >
            YouTube
          </a>{" "}
          及{" "}
          <a
            target="_blank"
            className="link"
            href="https://odysee.com/@SITCON:f"
          >
            LBRY
          </a>{" "}
          的 SITCON 頻道。您為議程準備的其餘相關素材（如投影片），將於年會後由
          SITCON
          議程組向您蒐集素材連結，並整理在年會官方網站的議程資訊上。您可以自行決定在何種平台、以何種方式釋出，我們不會干涉，但鼓勵您選擇允許知識共享的
          創用 CC 系列授權。
        </p>
      </div>
    </div>
  );
}
