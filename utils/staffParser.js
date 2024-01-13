const fs = require("fs");
const sha256 = require("js-sha256");
const staff = fs
  .readFileSync("./SITCON 2024 工作人員（for 官網） - 工作表1.csv", "utf8")
  .split("\n");
const groupDescription = {
  總召組: "掌握協調年會籌備進度，主持核心討論及決策。",
  行政組:
    "負責維持年會常務行政事務；工作分為人事、票務，負責工作人員登記、與會人員與報名事宜。",
  議程組:
    "議程組負責一切與議程相關的事情，舉凡投稿與審稿、講者聯繫、Keynote 與論壇的安排，都是議程組的工作範圍，此外，議程組也負責一部分的大會活動。",
  場務組:
    "SITCON 場務組主要負責年會的機動人力、動線、餐飲、報到和物流的規劃，是人數最多的一組，適合最有熱情、最有活力的朋友們！",
  設計組:
    "負責年會主視覺設計、網站設計、相關紀念品發想挖坑等事宜，開場動畫與許多會場內的印刷品也都是由設計組設計。",
  財務組: "負責年會與金錢相關的業務。",
  紀錄組: "協助年會與相關活動之影像紀錄，及提供各組所需之影像素材。",
  製播組: "協助年會當天各會議廳之錄影及直播，並處理議程演講的剪接後製。",
  開發組:
    "SITCON 開發組主要負責年會的官網與通關 App 開發，適合對網頁開發有興趣、想法，有新鮮肝可以炸的朋友們！",
  編輯組:
    "SITCON 編輯組負責年會的社群媒體經營與互動，包含 Facebook、Instagram、Plurk、X、Telegram Channel、Mastodon、Discord、Medium 等平台，以及開源相關活動推廣與其他組別公告事項、大會公告等文案撰寫需求。適合對社群媒體經營有興趣，有新鮮腦汁可以榨的朋友們！",
  行銷組:
    "行銷組是銜接 SITCON 與社會的橋樑，負責探詢潛在的合作單位，連結更多支持 SITCON 理念的創作者、媒體與贊助商，適合善於溝通協調、勇於嘗試的你！",
};
// group role name email
const staffList = staff.map((staff) => {
  let [group, role, name, email] = staff.split(",");
  email = sha256(email.toLowerCase().trim());

  return { group, role, name, email };
});
let result = [];
for (let [group, description] of Object.entries(groupDescription)) {
  result.push({
    group,
    description,
    staff: staffList.filter((staff) => staff.group === group),
  });
}
fs.writeFileSync("../app/(website)/staff/staff.json", JSON.stringify(result));
