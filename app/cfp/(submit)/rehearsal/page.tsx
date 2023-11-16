import Title from "@/components/cfp/Title";
import Subtitle from "@/components/cfp/Subtitle";
import Toc from "@/components/cfp/Toc";
export default function Page() {
  const tocs = [
    { link: "#trial", name: "試講" },
    { link: "#rehearsal", name: "彩排" },
  ];
  return (
    <div className="flex flex-col lg:flex-row-reverse relative gap-6">
      <Toc sections={tocs} />
      <div className="flex flex-col mb-5">
        <Title>試講與彩排</Title>
        <Subtitle id="trial">試講</Subtitle>
        <p>
          試講提供講者提升演講品質的機會，比照年會時間安排供講者講完整場演講，並
          <span className="text-pink font-bold">
            有議程組人員提供建議（如簡報、臺風等）
          </span>
          ，講者可以自由參加，並自行選擇最合適的場次。若您的稿件確認入選，議程組將再與您協調確切時間。為了維護所有講者的權利，試講時間恕不接受更改，請各位講者準時參與。
        </p>
        <p>
          所有場次將依報名情況舉辦，預計舉辦北部、中部、南部、線上場等，時間約為一月下旬至二月中旬，地點另行通知。
        </p>
        <p>
          試講交通補助：依照客運價格標準，我們將補助講者至最近試講場地的全額或部分車資。
        </p>
        <Subtitle id="rehearsal">彩排</Subtitle>
        <p>
          本屆 SITCON
          將在年會前一天提供入選講者彩排的機會。彩排能讓講者熟悉現場設備環境、攝影機位置，並且測試
          Live Demo 情境。希望講者能夠共同參與彩排，一起使年會議程品質更臻完美。
        </p>
        <p>
          日期：2024 年 3 月 8 日（五）。
          <br />
          場地：使用場地與正式年會相同，細節將於稿件錄取後通知。
          <br />
          時間：一人約 5–10 分鐘。若有 Live Demo
          或特殊需求，可提前與議程組安排時間。
          <br />
          流程：講者操作設備，測試 Live Demo
          連結及切換方式，也可以演練部分簡報內容。
          <br />
          提供設備：與年會當天場地的設備相同，例如麥克風、倒數計時器等。
        </p>
      </div>
    </div>
  );
}
