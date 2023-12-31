"use client";
import Button from "@/components/website/button";
import TableOfContent from "@/components/TableOfContent";
import staffData from "./staff.json";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <TableOfContent>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="page-title">
        SITCON 團隊
      </h1>
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
          color="blue"
          url="https://docs.google.com/forms/d/e/1FAIpQLSfZHHumwRKY9UzBpMUD7MWzimnOLvm-cPu4noIzyoWPHbaaHA/viewform"
        >
          跳坑表單
        </Button>
        <Button color="blue" url="https://groups.google.com/g/sitcon-general/">
          郵件論壇
        </Button>
      </div>
      {staffData.map((group, index) => (
        <motion.div
          key={index}
          className="my-10"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.25 },
          }}
          viewport={{ once: true }}
        >
          <h1
            className="text-xl md:text-2xl font-bold scroll-m-[96px]"
            id={group.group}
          >
            {group.group}
          </h1>
          <p>{group.description}</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-x-6 md:gap-12 md:gap-y-6 mt-6">
            {group.staff.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-center"
              >
                <motion.img
                  src={`https://www.gravatar.com/avatar/${member.email}?s=512`}
                  className="w-full aspect-square rounded-full bg-white"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="mt-2 leading-6">{member.name}</div>
                <div className="text-xs mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </TableOfContent>
  );
}
