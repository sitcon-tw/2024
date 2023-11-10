import { twMerge } from "tailwind-merge";
export default function SubmissionBtn({ href }: { href: string }) {
  return (
    <div>
      <a
        className={twMerge(
          "bg-gold text-xl font-bold text-white h-[40px] w-full rounded-full hover:bg-opacity-90 active:bg-opacity-80"
        )}
        href={href}
        target="_blank"
      >
        立刻投稿
      </a>
    </div>
  );
}
