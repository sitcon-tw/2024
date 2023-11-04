"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      className={twMerge(
        "flex items-center gap-2 transition-colors -translate-x-3 group",
        !isActive
          ? "text-[#808080] hover:text-[#595959]"
          : "text-black font-bold"
      )}
    >
      <div
        className={twMerge(
          "h-[1.2em] w-1 rounded-full transition-all duration-300 bg-[#AC24FF]",
          isActive ? "opacity-100" : "opacity-0 h-1"
        )}
      />
      {children}
    </Link>
  );
}

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 container my-6">
      <div className="min-w-[180px] hidden lg:flex flex-col gap-2 sticky top-[88px] self-start">
        <div className="text-[#0CE295] font-bold text-lg">議程與海報徵稿</div>
        <NavLink href="/cfp/submit">投稿頁面</NavLink>
        <NavLink href="/cfp/normal">一般議程</NavLink>
        <NavLink href="/cfp/undefined">開放式議程</NavLink>
        <NavLink href="/cfp/poster">海報</NavLink>
        <div className="text-[#FF3495] font-bold text-lg mt-2">其他事項</div>
        <NavLink href="/cfp/coc">Code of Conduct</NavLink>
        <NavLink href="/cfp/notice">投稿注意事項與授權</NavLink>
        <NavLink href="/cfp/rehearsal">試講與彩排</NavLink>
        <NavLink href="/cfp/qa">Q&A</NavLink>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
