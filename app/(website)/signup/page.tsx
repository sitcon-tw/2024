"use client";
import { CiGift } from "react-icons/ci";
import Button from "@/components/website/button";
import TicketSection from "@/components/website/ticketSection";
import TableOfContent from "@/components/TableOfContent";

export default function Page() {
  return (
    <TableOfContent>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="page-title">
        報名資訊
      </h1>
      <div className="mb-10 flex flex-row justify-around pb-16">
        <div className="basis-4/5">
          <p>
            SITCON
            年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助，若您也認同
            SITCON 的理念，歡迎支持我們。
          </p>
        </div>
        <div className="basis-1/5">
          <Button color="blue">支持我們</Button>
        </div>
      </div>
      <div className="flex flex-col">
        <TicketSection
          name="一般票"
          description={[
            "第一波售票 2024/01/14 20:00 ~ 2024/01/27 23:59",
            "第二波售票 2024/02/04 20:00 ~ 2024/02/17 23:59",
          ]}
          button="立即購票"
          url="/ticket/general"
        >
        </TicketSection>
        <TicketSection
          name="一般票"
          description={[
            "第一波售票 2024/01/14 20:00 ~ 2024/01/27 23:59",
            "第二波售票 2024/02/04 20:00 ~ 2024/02/17 23:59",
          ]}
          button="立即購票"
          url="/ticket/general"
        >
        </TicketSection>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="post-info">
        投稿資訊
      </h1>
      <div className="mb-10 flex flex-row justify-around pb-16">
        <div className="basis-4/5">
          <p>
            SITCON
            期望成為學生展現自己的舞台，如果你有想要與大家分享的經驗、技術或專案，歡迎於
            2024/01/20
            前用以下形式的投搞，我們歡迎任何與資訊或電腦軟硬體相關的講題。
          </p>
          <ul className="ml-16 list-disc mt-4">
            <li>
              一般議程：10 分鐘與 40
              分鐘的議程，帶給會眾知識的洗禮與思想的壯遊。
            </li>
            <li>
              開放式議程：40
              分鐘的議程，不限定進行方式，歡迎任何非傳統、實現性質的形式進行此場議程。
            </li>
            <li>海報投稿：以靜態海報展出學生個人或團隊專案研究作品。</li>
          </ul>
        </div>
        <div className="basis-1/5">
          <Button color="blue">了解更多</Button>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="souvenir-info">
        紀念品資訊
      </h1>
      <div className="container flex flex-col justify-center items-center text-center pt-20 gap-4">
        <CiGift className="text-8xl" />
        <div>
          <div className="text-4xl font-bold">紀念品</div>
          <div className="text-2xl">即將上線！</div>
        </div>
      </div>
    </TableOfContent>
  );
}
