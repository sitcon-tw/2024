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
        "group flex -translate-x-3 items-center gap-2 transition-colors",
        !isActive
          ? "text-[#808080] hover:text-[#595959]"
          : "font-bold text-[#1E1E1E]",
      )}
    >
      <div
        className={twMerge(
          "h-[1.2em] w-1 rounded-full bg-[#AC24FF] transition-all duration-300",
          isActive ? "opacity-100" : "h-1 opacity-0",
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
    <div className="container my-6 flex gap-6">
      <div className="sticky top-[88px] hidden min-w-[180px] flex-col gap-2 self-start lg:flex">
        <div className="text-lg font-bold text-[#0CE295]">議程與海報徵稿</div>
        <NavLink href="/cfp/submit/">投稿頁面</NavLink>
        <NavLink href="/cfp/normal/">一般議程</NavLink>
        <NavLink href="/cfp/undefined/">開放式議程</NavLink>
        <NavLink href="/cfp/poster/">靜態海報展</NavLink>
        <div className="mt-2 text-lg font-bold text-[#FF3495]">其他事項</div>
        <NavLink href="/cfp/coc/">Code of Conduct</NavLink>
        <NavLink href="/cfp/notice/">投稿注意事項與授權</NavLink>
        <NavLink href="/cfp/rehearsal/">試講與彩排</NavLink>
        <NavLink href="/cfp/qa/">Q&A</NavLink>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
