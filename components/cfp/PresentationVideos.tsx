import VideoCard from "@/components/cfp/VideoCard";
export default function PresentationVideos() {
  const data = [
    {
      title: "身為學生，做研究也要拿出真本事",
      infoHref: "https://sitcon.org/2022/agenda/44d2d0",
      id: "SbIPLs8q91Q",
    },
    {
      title: "教練我想打 Code！為甚麼要學計組和 OS？",
      infoHref: "https://sitcon.org/2022/agenda/82b1c6",
      id: "wHWjPbD0ZaE",
    },
    {
      title: "Windows 系統安全這麼複雜怎麼學",
      infoHref: "https://sitcon.org/2022/agenda/6362cd",
      id: "zOGGMS84mzU",
    },
    {
      title: "想自己辦活動或比賽嗎？那先來看看我們吧！",
      infoHref: "https://sitcon.org/2022/agenda/9109ae",
      id: "_ShwBPzj_XU",
    },
    {
      title: "關於 CTF 的那些事",
      infoHref:
        "https://sitcon.org/2021/agenda/7a88857e-7d50-4d9c-a656-2d99feef6198",
      id: "_lNPRlt6c2E",
    },
    {
      title: "NLP 陪聊 AI 培育法",
      infoHref:
        "https://sitcon.org/2021/agenda/80e71005-50f9-4e5a-bbc7-e4c6c4eeae9b",
      id: "0YMG2n_wwXU",
    },
    {
      title: "網路維運，在台灣怎麼玩？打造全台最大家用網路！",
      infoHref:
        "https://sitcon.org/2021/agenda/3fe74d93-2ab5-4c42-8b49-b5b92973f4aa",
      id: "paJ0AlW6h-I",
    },
    {
      title: "第一次做密室逃脫就上手",
      infoHref:
        "https://sitcon.org/2020/agenda/bdcf60d1-4ea7-4485-bc64-a6252eabc19f",
      id: "1gFBx16AlMc",
    },
    {
      title: "從學校到業界，工程師作為職業的現實",
      infoHref:
        "https://sitcon.org/2019/agenda/7a67f4fb-b6f4-4595-b9af-527b3024c8f8",
      id: "qYxdomoMEf8",
    },
    {
      title: "奔跑吧！台北：遊戲開發經驗分享",
      infoHref:
        "https://sitcon.org/2018/#/agenda/sub/d946b6e1-d826-4c64-86a4-bf013bcc0c06",
      id: "85bW97XI4i0",
    },
    {
      title: "Club Mate 與德國駭客精神：34C3 大會實錄",
      infoHref:
        "https://sitcon.org/2018/#/agenda/sub/35598abf-4efe-48fc-93a4-3d539e6f6c47",
      id: "8xrYLc4num8",
    },
    {
      title: "開發學校雲端服務的奇技淫巧",
      id: "msrsjX8mddE",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 mb-8 mt-4">
      {data.map((item, index) => (
        <VideoCard key={index} {...item} />
      ))}
    </div>
  );
}
