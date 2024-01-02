import { useEffect, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
type Headings = {
  id: string;
  text: string;
  level: number;
  active: boolean;
}[];
export default function TableOfContent({
  children,
  selector = "h1, h2, h3, h4",
}: {
  children: React.ReactNode;
  selector?: string;
}) {
  const [headings, setHeadings] = useState<Headings>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector)).map(
      (elem) => ({
        id: elem.id,
        //@ts-ignore
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
        active: false,
      }),
    );
    updateHeadings(elements);
  }, []);
  useMotionValueEvent(scrollY, "change", () => {
    updateHeadings(headings);
  });
  function updateHeadings(headings: Headings) {
    const scrollY = document.documentElement.scrollTop;
    let newHeadings = [...headings].map((heading) => ({
      ...heading,
      active: false,
    }));
    for (let heading of newHeadings) {
      //@ts-ignore
      if (scrollY <= document.getElementById(heading.id)?.offsetTop + 84) {
        heading.active = true;
        setHeadings(newHeadings);
        return;
      }
    }
  }

  return (
    <div className="container relative gap-8 md:grid md:grid-cols-[150px_1fr]">
      <div className="sticky top-[84px] hidden self-start md:block">
        <div className="text-lg font-bold">本頁目錄</div>
        {headings.map((heading, index) => (
          <a
            href={`#${heading.id}`}
            className={twMerge(
              `relative block`,
              heading.level - 1 > 0 && "ml-2",
              heading.active ? "font-bold text-[#462002]" : "text-[#462002]/60",
            )}
            key={index}
          >
            {heading.text}
            <AnimatePresence>
              {heading.active && (
                <motion.div
                  initial={{ opacity: 0, x: 1 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 1 }}
                  className="absolute -left-3 bottom-0 top-0 m-auto h-[1em] w-[4px] rounded bg-[#462002]"
                />
              )}
            </AnimatePresence>
          </a>
        ))}
      </div>
      <button
        className={twMerge(
          "relative mb-4 flex w-full cursor-pointer items-center justify-between border-2 border-[#462002] px-4 text-[#462002] md:hidden",
          isMenuOpen ? "rounded-t-lg" : "rounded-lg",
        )}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        本頁目錄
        {isMenuOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={twMerge(
              "absolute -mt-[18px] flex w-[calc(100%-32px)] flex-col gap-2 overflow-hidden rounded-b-lg border-2 border-[#462002] bg-[#F8F3E8] px-4",
            )}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {headings.map((heading, index) => (
              <a
                href={`#${heading.id}`}
                className={twMerge(`relative block`, "text-[#462002]")}
                key={index}
                onClick={() => setIsMenuOpen(false)}
              >
                {heading.text}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div>{children}</div>
    </div>
  );
}
