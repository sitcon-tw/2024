import Button from "@/components/website/button";
import TicketSection from "@/components/website/ticketSection";

export default function Page() {
  return <div className="container">
    <h1 className="text-5xl font-bold mb-14">報名資訊</h1>
    <div className="flex flex-col">
      <TicketSection name="一般票" description={[
        "第一波售票 2024/01/14 20:00 ~ 2024/01/27 23:59",
        "第二波售票 2024/02/04 20:00 ~ 2024/02/17 23:59",
      ]} button="立即購票" url="/ticket/general"
      ></TicketSection>
      <TicketSection name="一般票" description={[
        "第一波售票 2024/01/14 20:00 ~ 2024/01/27 23:59",
        "第二波售票 2024/02/04 20:00 ~ 2024/02/17 23:59",
      ]} button="立即購票" url="/ticket/general"
      ></TicketSection>
    </div>
  </div>
}
