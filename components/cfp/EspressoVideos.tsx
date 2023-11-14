import VideoCard from "@/components/cfp/VideoCard";
export default function PresentationVideos() {
  const data = [
    {
      title: "無線耳機，不只是耳機，還是簡報遙控器",
      infoHref: "https://sitcon.org/2022/agenda/40ca3d",
      id: "H1NyeQKpcUY",
    },
    {
      title:
        "從 0 到 GitHub Actions，以 Hexo Blog 為例設計專屬的 CI/CD Pipeline",
      infoHref: "https://sitcon.org/2022/agenda/b365cc",
      id: "y9TxmB2IykE",
    },
    {
      title: "PHP 是世界上最棒的語言，但我做了一個比它更棒的！",
      infoHref:
        "https://sitcon.org/2021/agenda/bb826e6d-8544-4101-8811-13032bd9a4fd",
      id: "y3EM5GHigTY",
    },
    {
      title: "喜歡打街機？做一台放家裡打r",
      infoHref:
        "https://sitcon.org/2021/agenda/2b210726-c5b0-4094-a591-fccb51f0ee55",
      id: "I07gX4YlYrE",
    },
    {
      title: "我也能讓 Python 幫忙操控電腦嗎？",
      infoHref:
        "https://sitcon.org/2020/agenda/32ba951d-3cfb-4461-ae6a-5ddbab693b8b",
      id: "MfiKAOBrPpk",
    },
    {
      title: "我只是個學生，架個網站不想花錢",
      infoHref:
        "https://sitcon.org/2020/agenda/0fe7e40c-4a84-4363-9e60-4188d81ccecc",
      id: "NGqXSCFvZ3M",
    },
    {
      title: "淺談社會網路分析",
      infoHref:
        "https://sitcon.org/2019/agenda/f60637a1-0ccb-4c02-b1b0-be7a6a393d87",
      id: "GFfaD-kVe_A",
    },
    {
      title: "你所不知道的維基 - Wikidata",
      infoHref:
        "https://sitcon.org/2019/agenda/7959ab0b-cdfa-40bc-8566-099477abb195",
      id: "kD-jGfDZGGo",
    },
    {
      title: "深度學習如何深度學習",
      infoHref:
        "https://sitcon.org/2018/#/agenda/sub/f3c6853d-2b0e-464c-8837-9411455961d8",
      id: "H5o5Oa_nbqs",
    },
    {
      title: "格鬥遊戲 AI 開發經驗談",
      id: "ryLLzSwQ54w",
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
