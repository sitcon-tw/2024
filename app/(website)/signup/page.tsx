"use client";
import Button from "@/components/website/button";
import TicketSection from "@/components/website/ticketSection";
import TableOfContent from "@/components/TableOfContent";

export default function Page() {
  return (
    <TableOfContent>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="page-title">
        報名資訊
      </h1>
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
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="souvenir-info">
        紀念品資訊
      </h1>
    </TableOfContent>
  );
}
