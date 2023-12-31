import Button from "@/components/website/button";
export default function Page() {
  return (
    <div className="container">
      <h1 className="text-2xl md:text-5xl font-bold mb-4">SITCON 團隊</h1>
      <p>
        SITCON
        年會每年皆是許多志工奉獻時間與精神所舉辦，沒有大家的付出，就不可能會有如此內容豐富且高品質的年會，
        希望大家在參加之餘，也不要忘記背後工作人員的付出。
      </p>
      <p>
        若你對參與 SITCON 年會的籌備有興趣，歡迎填寫跳坑表單或是關注 SITCON
        的郵件論壇，明年的籌備開始時，你就會收到相關的資訊！
      </p>
      <div className="flex justify-center items-center gap-6 mt-6">
        <Button
          text="跳坑表單"
          color="blue"
          url="https://docs.google.com/forms/d/e/1FAIpQLSfZHHumwRKY9UzBpMUD7MWzimnOLvm-cPu4noIzyoWPHbaaHA/viewform"
        />
        <Button
          text="郵件論壇"
          color="blue"
          url="https://groups.google.com/g/sitcon-general/"
        />
      </div>
    </div>
  );
}
